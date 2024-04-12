import { Ingredients } from '../../../backend/src/api/ingredients/schemas/ingredients.schema';


const getAllIngredients = async () => {
    const response = await fetch('http://localhost:3000/ingredients');
    return response.json();
};

const getIngredientById = async (id: string) => {
    const response = await fetch(`http://localhost:3000/ingredients/${id}`);
    return response.json();
}

const createIngredient = async (ingredient : Ingredients) => {
    const response = await fetch('http://localhost:3000/ingredients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredient),
    });
    return response.json();
};

export default {
    getAllIngredients,
    getIngredientById,
    createIngredient,
};