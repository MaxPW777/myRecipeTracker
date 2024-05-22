import React from 'react';

interface MyIngredientsListProps {
  selectedIngredients: string[];
}

function MyIngredientsList({ selectedIngredients }: MyIngredientsListProps) {
  return (
    <div className='main-block w-1/4'>
      <h1 className='text-center pt-4'>My List</h1>
      <ul>
        {selectedIngredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyIngredientsList;
