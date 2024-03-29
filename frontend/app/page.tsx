import React from 'react'
import MyRecipeContainer from './components/MyRecipeContainer'

function HomePage() {
    return (
        <main
            className='h-[calc(100%-5rem)] w-full justify-center items-center gap-4 flex p-10 '>
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
