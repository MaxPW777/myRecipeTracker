import React from 'react'
import CategoryItem from "./components/RecipeItem";

function RecipePage() {
    return (
        <main className={'flex justify-center items-center'}>
            <div
                className={'w-[calc(80% - 0.25rem)] md:max-w-[calc(4 * 13rem + 3 * 0.25rem)] md:p-3 h-full border rounded border-accent flex flex-wrap gap-1 px-auto overflow-y-auto'}>
                <CategoryItem ImageSource={'/tiramisu.jpg'} RecipeTitle={'Desserts'} RecipeID={'t68vfw4pd6r8sz34vpd'}/>
                <CategoryItem ImageSource={'/tiramisu.jpg'} RecipeTitle={'Desserts'} RecipeID={'t68vfw4pd6r8sz34vpd'}/>
                <CategoryItem ImageSource={'/tiramisu.jpg'} RecipeTitle={'Desserts'} RecipeID={'t68vfw4pd6r8sz34vpd'}/>
                <CategoryItem ImageSource={'/tiramisu.jpg'} RecipeTitle={'Desserts'} RecipeID={'t68vfw4pd6r8sz34vpd'}/>
                <CategoryItem ImageSource={'/tiramisu.jpg'} RecipeTitle={'Desserts'} RecipeID={'t68vfw4pd6r8sz34vpd'}/>
            </div>

        </main>
    )
}

export default RecipePage
