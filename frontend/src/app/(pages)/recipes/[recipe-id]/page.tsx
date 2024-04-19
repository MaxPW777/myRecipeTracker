"use client"
import React from 'react'
import {IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5";
import {useGetRecipeByIdQuery} from "@/src/services/recipes";
import {usePathname} from 'next/navigation'

function RecipePage() {
    const router = usePathname()
    const recipeId = router.split('/')[2] ?? ''
    const {data} = useGetRecipeByIdQuery(recipeId)
    console.log(data)
    return (
        <main className="grid grid-cols-2 grid-rows-3 gap-4">
            <div>
                <h1 className={'text-6xl'}>{data?.title}</h1>
                <div className={'flex text-2xl text-yellow-500'}>
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStarHalf/>
                    <IoStarOutline/>
                    <p className={'ml-3 text-white'}>30 notes</p>
                </div>
            </div>
            <div
                className="row-span-2 col-start-1 row-start-2 border p-3 flex flex-col">
                <h2 className={'text-4xl mb-4'}>Ingredients</h2>
                <ul className={'flex flex-col flex-wrap gap-5 h-full w-full'}>
                    {data && data?.ingredients.map((ingredient, index) => (
                        <li key={index}
                            className={'text-2xl'}>{ingredient.quantity} {ingredient.optional ? '(optional)' : ''}</li>
                    ))}
                </ul>

            </div>
            <div
                className="row-span-3 col-start-2 row-start-1 border flex flex-col p-3">
                <h2 className={'text-4xl p-2'}>Preparation</h2>
                <div className={'overflow-y-auto flex flex-col gap-5 h-full'}>
                    {data && data?.recipeParts.map((part, index) => (
                        <div key={index}>
                            <h2 className={'text-2xl'}>Part {part.partNumber}</h2>
                            <p className={'text-lg'}>{part.instructions}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default RecipePage
