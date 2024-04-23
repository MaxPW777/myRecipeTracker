"use client"

import IngredientCategories
    from "@/src/app/(pages)/ingredients/components/IngredientCategories";
import {useState} from "react";
import IngredientList from "@/src/app/(pages)/ingredients/components/IngredientsList";

function IngredientsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    return (
        <main className={'justify-center items-center gap-4 flex'}>
            <IngredientCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <IngredientList category={selectedCategory} />
        </main>

    )
}

export default IngredientsPage
