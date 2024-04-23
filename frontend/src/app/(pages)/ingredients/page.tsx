import IngredientCategories
    from "@/src/app/(pages)/ingredients/components/IngredientCategories";
import {useState} from "react";

function IngredientsPage() {


    return (
        <main className={'justify-center items-center gap-4 flex'}>
            <IngredientCategories />
            <div className={'w-full h-full'}></div>
        </main>

    )
}

export default IngredientsPage
