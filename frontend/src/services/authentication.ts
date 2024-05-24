import {useMutation} from "react-query";

const BASE_URL = 'http://localhost:4000/auth';

export const useLoginMutation = () => {
    return useMutation(login, {
        onSuccess: (data) => {
            // @ts-ignore access token will always be a string
            localStorage.setItem('token', data.access_token);
            window.location.href = '/';      },
    });
}

const login = async ({username, password}: {
    username: string,
    password: string
}): Promise<Response> => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    });
    return response.json();
}

export const useGetProfileQuery = () => {
    return useMutation(getProfile);
}

const getProfile = async () => {
    const response = await fetch(`${BASE_URL}/profile`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.json();
}
