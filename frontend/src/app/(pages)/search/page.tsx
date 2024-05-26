"use client"

import IngredientCategories from "@/src/app/(pages)/search/components/IngredientCategories";
import { useState } from "react";
import IngredientList from "@/src/app/(pages)/search/components/IngredientsList";
import MyIngredientsList from "./components/MyIngredientsList";

function IngredientsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

    const addSelectedIngredient = (ingredient: string) => {
        setSelectedIngredients((prevIngredients) => {
            if (!prevIngredients.includes(ingredient)) {
                return [...prevIngredients, ingredient];
            }
            return prevIngredients;
        });
    };

    const removeSelectedIngredient = (ingredient: string) => {
        setSelectedIngredients((prevIngredients) => {
            return prevIngredients.filter((prevIngredient) => prevIngredient !== ingredient);
        });
    }

    return (
        <main className={'md:justify-center items-center gap-4 flex flex-col md:flex-row'}>
            <IngredientCategories
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <IngredientList
                category={selectedCategory}
                setSelectedIngredients={addSelectedIngredient}
                selectedIngredients={selectedIngredients}
            />
            <MyIngredientsList
                selectedIngredients={selectedIngredients}
                removeSelectedIngredient={removeSelectedIngredient}
            />
        </main>
    );
}

export default IngredientsPage;
