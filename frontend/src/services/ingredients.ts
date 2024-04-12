import { Ingredients } from '../../../backend/src/api/ingredients/schemas/ingredients.schema';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:3000/ingredients';

export const useGetAllIngredients = () => {
    return useQuery({
        queryKey: 'ingredients',
        queryFn: getAllIngredients,
    })
}

const getAllIngredients = async () : Promise<Ingredients[]> => {
    try {
        const response = await fetch(BASE_URL);
        return response.json();
    } catch (error) {
        throw error;
    }
};

export const useGetIngredientById = (id: string) => {
    return useQuery({
        queryKey: ['ingredient', id],
        queryFn: () => getIngredientById(id),
    });
};

const getIngredientById = async (id: string) : Promise<Ingredients> => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`);
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const useCreateIngredient = ( ingredientData : Ingredients) => {
    const queryClient = useQueryClient();
    return useMutation(() => createIngredient(ingredientData), {
        onSuccess: () => {
            queryClient.invalidateQueries('ingredients');
        }
    });
}

const createIngredient = async (ingredient: Ingredients) : Promise<Ingredients> => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ingredient),
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};
