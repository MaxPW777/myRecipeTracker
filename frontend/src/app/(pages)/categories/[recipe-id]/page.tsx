import React from 'react'
import {IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5";

function RecipePage() {
    return (
        <main className="grid grid-cols-2 grid-rows-3 gap-4">
            <div>
                <h1 className={'text-6xl'}>Mega Recipe</h1>
                <div className={'flex text-2xl text-yellow-500'}>
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStarHalf/>
                    <IoStarOutline/>
                    <p className={'ml-3 text-white'}>30 notes</p>
                </div>
            </div>
            <div className="row-span-2 col-start-1 row-start-2 border"></div>
            <div className="row-span-3 col-start-2 row-start-1 border"></div>
        </main>
    )
}

export default RecipePage
