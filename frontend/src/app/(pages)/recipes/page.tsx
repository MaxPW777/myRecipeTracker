"use client"
import useAuth from "@/src/hooks/useAuth";
import React from 'react'
import {useGetRecipesByAuthorQuery} from "@/src/services/recipes";
import RecipeList from "./components/RecipeList";

function RecipePage() {
    const isAuth = useAuth();
    const {data} = useGetRecipesByAuthorQuery('65f46e79a69422ad1aa775c1')
    console.log(data)
    if (!isAuth) return null;
    return (
        <main className={'flex justify-center items-center'}>
            <div
                className={'w-[calc(80% - 0.25rem)] md:max-w-[calc(4 * 13rem + 3 * 0.25rem)] md:p-3 h-full border rounded border-accent flex flex-wrap gap-1 px-auto overflow-y-auto'}>
                {
                    data && <RecipeList data={data}/>}
            </div>

        </main>
    )
}

export default RecipePage
