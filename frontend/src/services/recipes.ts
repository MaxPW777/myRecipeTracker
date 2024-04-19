import Recipe from '@/src/types/Recipe';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:4000/recipes';

export const useGetAllRecipesMutation = ( ) => {
    const queryClient = useQueryClient();
    return useMutation(createRecipe, {
        onSuccess: () => {
            queryClient.invalidateQueries('recipes');
        }
    });
}

const createRecipe = async (recipe : Recipe) : Promise<Recipe> => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
    });
    return response.json();
}

export const useGetRecipeByIdQuery = (id: string) => {
    return useQuery({
        queryKey: ['recipes', id],
        queryFn: () => getRecipeById(id),
    });
};

const getRecipeById = async (id: string) : Promise<Recipe> => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
}
