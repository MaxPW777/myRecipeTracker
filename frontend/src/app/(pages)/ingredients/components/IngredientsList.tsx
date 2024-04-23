import React from 'react'

interface IngredientsListProps {
    category: string | null;
}

function IngredientsList( {category}: IngredientsListProps) {
  return (
    <div className='main-block p-3'>{category}</div>
  )
}

export default IngredientsList