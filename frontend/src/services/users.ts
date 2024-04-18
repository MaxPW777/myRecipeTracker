import {Users} from '../../../backend/src/api/users/schemas/users.schema';
import {useMutation, useQuery, useQueryClient} from 'react-query';

const BASE_URL = 'http://localhost:4000/users';

export const useGetAllUsersQuery = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getAllUsers,
    })
}

const getAllUsers = async (): Promise<Users[]> => {
    const response = await fetch(BASE_URL);
    return response.json();
};

export const useGetUserByIdQuery = (id: string) => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: () => getUserById(id),
    })
}

const getUserById = async (id: string): Promise<Users> => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
}

export const useCreateUserMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(createUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })
}

const createUser = async (user: Users): Promise<Users> => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const useUpdateUserMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })
}

const updateUser = async ({id, user}: {
    id: string,
    user: Users
}): Promise<Users> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

export const useDeleteUserMutation = () => {
    const queryClient = useQueryClient();
    return useMutation( deleteUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })
}

const deleteUser = async (id: string): Promise<Users> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}
