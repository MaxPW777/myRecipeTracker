import {useGetIngredientsByCategoryQuery} from '@/src/services/ingredients';
import React from 'react';
import {twMerge} from 'tailwind-merge';
import Image from "next/image";

interface IngredientsListProps {
    category: string | null;
    setSelectedIngredients: (ingredient: string) => void;
    selectedIngredients: string[] | null;
}

const addIngredient = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    setSelectedIngredients: (ingredient: string) => void
) => {
    const ingredientName = event.currentTarget.getAttribute('data-name');
    if (ingredientName) {
        setSelectedIngredients(ingredientName);
    }
};

function IngredientsList({
                             category,
                             setSelectedIngredients,
                             selectedIngredients
                         }: IngredientsListProps) {
    const {data: ingredients} = useGetIngredientsByCategoryQuery(category as string);

    return (
        <div
            className='main-block p-3 flex flex-wrap gap-4 overflow-y-auto min-h-[30rem]'>
            {ingredients && ingredients.map((ingredient) => {
                let isSelected = false;
                if (selectedIngredients) {
                    isSelected = selectedIngredients.includes(ingredient.name);
                }
                return (
                    // @ts-ignore
                    <div key={ingredient.id} className={'relative w-44 h-44'}>

                        <Image
                            className={twMerge('transition-all', isSelected && 'border-4 border-accent opacity-50')} // Apply a different class if selected
                            data-name={ingredient.name}
                            src={ingredient.image}
                            onClick={(event) => addIngredient(event, setSelectedIngredients)}
                            alt={ingredient.name}
                            fill={true}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default IngredientsList;
