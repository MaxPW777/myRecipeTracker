import Recipe from "@/src/types/Recipe";
import React from "react";

const recipes: Recipe[] | null = null

function myRecipeContainer() {
    return (
        <div className={'main-block'}>
            <p className={'m-5'}>My Recipes</p>
            {
                recipes ?
                    (<div className={'flex flex-col'}>
                            {recipes.map((recipe) => (
                                <div
                                    className={'w-full h-20 flex flex-col justify-center items-end border-y-2 border-accent text-2xl'}
                                    key={recipe.id}>
                                    <h1>{recipe.title}</h1>
                                    <h3 className={'text-sm'}>{recipe.Ingredients.length}</h3>
                                </div>
                            ))}
                        </div>
                    ) : <div className={'flex items-center justify-center mt-[30%]'}>Loading</div>
            }
        </div>
    )
}

export default myRecipeContainer;
