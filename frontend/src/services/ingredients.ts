import Ingredient from '../types/Ingredient'; ;
import { useQuery, useMutation, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:4000/ingredients';

export const useGetAllIngredientsQuery = () => {
    return useQuery({
        queryKey: ['ingredients'],
        queryFn: getAllIngredients,
    })
}

const getAllIngredients = async () : Promise<Ingredient[]> => {
    try {
        const response = await fetch(BASE_URL);
        return response.json();
    } catch (error) {
        throw error;
    }
};

export const useGetIngredientByIdQuery = (id: string) => {
    return useQuery({
        queryKey: ['ingredient', id],
        queryFn: () => getIngredientById(id),
    });
};

const getIngredientById = async (id: string) : Promise<Ingredient> => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`);
        return response.json();
    } catch (error) {
        throw error;
    }
}

export const useGetIngredientsByCategoryQuery = (category: string) => {
    return useQuery({
        queryKey: ['ingredients', category],
        queryFn: () => getIngredientsByCategory(category),
    });
};

const getIngredientsByCategory = async (category: string) : Promise<Ingredient[]> => {
    try {
        const response = await fetch(`${BASE_URL}/category/${category}`);
        return response.json();
    } catch (error) {
        throw error;
    }
};

export const useCreateIngredientMutation = ( ) => {
    const queryClient = useQueryClient();
    return useMutation(createIngredient, {
        onSuccess: () => {
            queryClient.invalidateQueries('ingredients');
        }
    });
}

const createIngredient = async (ingredient: Ingredient) : Promise<Ingredient> => {
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
