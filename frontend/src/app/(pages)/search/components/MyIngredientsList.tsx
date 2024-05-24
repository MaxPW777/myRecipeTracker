import React from 'react';
import { ImBin } from "react-icons/im";

interface MyIngredientsListProps {
  selectedIngredients: string[];
  removeSelectedIngredient: (ingredient: string) => void;
}

function MyIngredientsList({ selectedIngredients, removeSelectedIngredient }: MyIngredientsListProps) {
  return (
    <div className='main-block w-1/4 flex flex-col'>
      <h1 className='text-center py-5'>My List</h1>
      <ul className={' overflow-y-auto'}>
        {selectedIngredients.map((ingredient) => (
          <li className='text-center p-2 mx-2 mb-2 border border-accent flex justify-between' key={ingredient}>
            {ingredient} <ImBin className='inline ml-4' onClick={() => removeSelectedIngredient(ingredient)}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyIngredientsList;
