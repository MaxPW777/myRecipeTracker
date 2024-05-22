import { useGetIngredientsByCategoryQuery } from '@/src/services/ingredients';
import React from 'react';

interface IngredientsListProps {
  category: string | null;
  setSelectedIngredients: (ingredient: string) => void;
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

function IngredientsList({ category, setSelectedIngredients }: IngredientsListProps) {
  const { data: ingredients } = useGetIngredientsByCategoryQuery(category as string);

  return (
    <div className='main-block p-3 flex flex-wrap gap-4'>
      {ingredients && ingredients.map((ingredient) => (
        <img
          key={ingredient.id}
          className='w-44 h-44'
          data-name={ingredient.name}
          src={ingredient.image}
          onClick={(event) => addIngredient(event, setSelectedIngredients)}
          alt={ingredient.name}
        />
      ))}
    </div>
  );
}

export default IngredientsList;
