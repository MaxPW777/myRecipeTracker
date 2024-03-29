import React from 'react'
import MyRecipeContainer from './components/MyRecipeContainer'

function HomePage() {
    return (
        <main>
            <div className={'main-block p-5 flex flex-col gap-4'}>
                <p>My Ingredient</p>
                <div className={'h-full w-full border rounded'}>
                </div>
            </div>
            <MyRecipeContainer/>
        </main>
    )
}

export default HomePage
