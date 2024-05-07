import { useGetIngredientsByCategoryQuery } from '@/src/services/ingredients';
import React from 'react'

interface IngredientsListProps {
    category: string | null;
}

function IngredientsList( {category}: IngredientsListProps) {
  const { data: ingredients, isLoading, isError } = useGetIngredientsByCategoryQuery(category as string);

  return (
    <div className='main-block p-3 flex flex-wrap gap-4'>
      {ingredients && ingredients.map((ingredient) => (
        <div className='border h-fit w-1/6' key={ingredient.id}>
          <h2 className='text-center'>{ingredient.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default IngredientsList