import { Recipes } from '../../../../backend/src/api/recipes/schemas/recipes.schema';

const createRecipe = async (recipe : Recipes) => {
    const response = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
    });
    return response.json();
}

const getRecipeById = async (id: string) => {
    const response = await fetch(`http://localhost:3000/recipes/${id}`);
    return response.json();
}

export default {
    createRecipe,
    getRecipeById,
};