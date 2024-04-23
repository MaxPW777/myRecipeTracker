"use client"
import React from 'react'
import CategoryItem from "./components/RecipeItem";
import {useGetRecipesByAuthorQuery} from "@/src/services/recipes";
import ErrorModule from "@/src/app/components/ErrorModule";
import IRecipe from "@/src/types/Recipe";

function RecipePage() {
    const {data} = useGetRecipesByAuthorQuery('65f46e79a69422ad1aa775c1')
    console.log(data)

    return (
        <main className={'flex justify-center items-center'}>
            <div
                className={'w-[calc(80% - 0.25rem)] md:max-w-[calc(4 * 13rem + 3 * 0.25rem)] md:p-3 h-full border rounded border-accent flex flex-wrap gap-1 px-auto overflow-y-auto'}>
                {
                    data &&(
                        'length' in data ?
                            data.map((recipe: IRecipe) => (
                                <CategoryItem key={recipe._id}
                                              ImageSource={'/tiramisu.jpg'}
                                              RecipeTitle={recipe.title}
                                              RecipeID={recipe._id}/>
                            )) :
                            'message' in data ?
                                <div className={'text-center w-full'}>
                                    <ErrorModule error={data}/>
                                </div> :
                                <p>Loading...</p>
                    )}
            </div>

        </main>
    )
}

export default RecipePage
