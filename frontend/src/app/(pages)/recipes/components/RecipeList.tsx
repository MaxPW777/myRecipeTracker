"use client"
import IRecipe from "@/src/types/Recipe";
import CategoryItem from "@/src/app/(pages)/recipes/components/RecipeItem";
import ErrorModule from "@/src/app/components/ErrorModule";
import React from "react";

interface RecipeListProps {
    data: IRecipe[] | { message: string, statusCode: number }
}

export default function RecipeList({data}: RecipeListProps) {
    return (
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
    )
}
