"use client"
import {useState} from "react";
import {twMerge} from "tailwind-merge";
import Link from "next/link";

const categories = [
    'Fruits',
    'Vegetables',
    'Meat',
    'Fish',
    'Dairy',
    'Grains',
    'Spices',
    'Herbs',
    'Legumes',
    'Nuts',
]

function IngredientCategorie() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    return (
        <div className={'main-block md:w-1/2'}>
            <h1>Ingredient Categories</h1>
            <ul className={'p-2 flex flex-col gap-3'}>
                <Link href={'#'}>All</Link>
                {categories.map((category) => (
                    <Link href={`?${category}`}
                          className={twMerge('border border-accent flex justify-end p-1', selectedCategory == category && 'border-4')}
                          key={category}
                          onClick={() => setSelectedCategory(category)}>{category}</Link>
                ))}
            </ul>

        </div>
    )

}

export default IngredientCategorie;
