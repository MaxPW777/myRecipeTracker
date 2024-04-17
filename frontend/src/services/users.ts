import { Users } from '../../../backend/src/api/users/schemas/users.schema';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const BASE_URL = 'http://localhost:4000/users';

export const useGetAllUsersQuery = () => {
    return useQuery({
        queryKey : ['users'],
        queryFn : getAllUsers,
    })
}

const getAllUsers = async () : Promise<Users[]> => {
    const response = await fetch(BASE_URL);
    return response.json();
};

export const useGetUserByIdQuery = (id : string) => {
    return useQuery({
        queryKey : ['users', id],
        queryFn : () => getUserById(id),
    })
}

const getUserById = async (id: string) : Promise<Users> => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
}

export const useCreateUserMutation = (userData : Users) => {
    const queryClient = useQueryClient();
    return useMutation(() => createUser(userData), {
        onSuccess : () => {
            queryClient.invalidateQueries('users')
        }
    })
}

const createUser = async (user : Users) : Promise<Users> => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const useUpdateUserMutation = (id : string, userdata : Users) => {
    const queryClient = useQueryClient();
    return useMutation(() => updateUser(id, userdata), {
        onSuccess : () => {
            queryClient.invalidateQueries('users')
        }
    })
}

const updateUser = async (id: string, user: Users) : Promise<Users> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

export const useDeleteUserMutation = ( id : string ) => {
    const queryClient = useQueryClient();
    return useMutation(() => deleteUser(id), {
        onSuccess : () => {
            queryClient.invalidateQueries('users')
        }
    })
}

const deleteUser = async (id: string) : Promise<Users>=> {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}