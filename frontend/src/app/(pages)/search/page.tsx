"use client"

import IngredientCategories
    from "@/src/app/(pages)/search/components/IngredientCategories";
import {useState} from "react";
import IngredientList
    from "@/src/app/(pages)/search/components/IngredientsList";
import MyIngredientsList from "./components/MyIngredientsList";
import useAuth from "@/src/hooks/useAuth";

function IngredientsPage() {
    const isAuth = useAuth();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

    if (!isAuth) return null;
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
        <main className={'overflow-y-auto gap-4 flex flex-col items-center md:flex-row md:justify-center'}>
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
