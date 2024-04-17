import { Recipes } from '../../../backend/src/api/recipes/schemas/recipes.schema';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:4000/recipes';

export const useGetAllRecipesMutation = ( recipeData : Recipes ) => {
    const queryClient = useQueryClient();
    return useMutation(() => createRecipe(recipeData), {
        onSuccess: () => {
            queryClient.invalidateQueries('recipes');
        }
    });
}

const createRecipe = async (recipe : Recipes) : Promise<Recipes> => {
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
        queryKey: ['recipe', id],
        queryFn: () => getRecipeById(id),
    });
};

const getRecipeById = async (id: string) : Promise<Recipes> => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
}