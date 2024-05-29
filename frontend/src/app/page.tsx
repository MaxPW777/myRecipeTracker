"use client"
import React from 'react'
import RecipeList from "./(pages)/recipes/components/RecipeList";
import {useGetRecipesByAuthorQuery} from "@/src/services/recipes";

function HomePage() {
    const recipes = useGetRecipesByAuthorQuery('65f46e79a69422ad1aa775c1')
    return (
        <main
            className={'justify-center items-center gap-4 flex flex-col md:flex-row'}>
            <div className={'main-block p-5 flex flex-col gap-4'}>
                <p>My Ingredient</p>
                <div className={'h-full w-full border rounded'}>
                </div>
            </div>
            <div className={'main-block p-5 flex flex-col gap-4 '}>
                <p>Recent Recipes</p>
                <div className={'h-full overflow-y-auto w-full border rounded flex flex-wrap text-sm p-5 gap-5 justify-center'}>
                <RecipeList data={recipes.data}/>
                </div>
            </div>
        </main>
    )
}

export default HomePage
