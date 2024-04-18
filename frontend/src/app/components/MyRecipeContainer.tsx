"use client"
import Recipe from "@/src/types/Recipe";
import React from "react";
import {useGetRecipeByIdQuery} from "@/src/services/recipes";

const recipes: Recipe[] | null = null

function MyRecipeContainer() {
    const {data} = useGetRecipeByIdQuery('zipette')
    const [recipes, setRecipes] = React.useState<Recipe[] | null>(null)

    return (
        <div className={'main-block'}>
            <p className={'m-5'}>My Recipes</p>
            {
                data ?
                    (<div className={'flex flex-col'}>
                            {data.map((recipe,index) => (
                                <div
                                    className={'w-full h-20 flex flex-col justify-center items-end border-y-2 border-accent text-2xl'}
                                    key={index}>
                                    <h1>{recipe.title}</h1>
                                    <h3 className={'text-sm'}>{recipe.ingredients.length}</h3>
                                </div>
                            ))}
                        </div>
                    ) : <div className={'flex items-center justify-center mt-[30%]'}>Loading</div>
            }
        </div>
    )
}

export default MyRecipeContainer;
