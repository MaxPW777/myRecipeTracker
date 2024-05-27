"use client"
import React from 'react'
import RecipeList from "./(pages)/recipes/components/RecipeList";

function HomePage() {
    return (
        <main className={'justify-center items-center gap-4 flex flex-col md:flex-row'}>
            <div className={'main-block p-5 flex flex-col gap-4'}>
                <p>My Ingredient</p>
                <div className={'h-full w-full border rounded'}>
                </div>
            </div>
            <RecipeList data={{message : "test", statusCode:2304}}/>
        </main>
    )
}

export default HomePage
