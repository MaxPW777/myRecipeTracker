import {useMutation} from "react-query";
import INestError from "@packages/types/IError";

const BASE_URL = 'http://localhost:4000/auth';

export const useLoginMutation = () => {
    return useMutation(login);
}

const login = async ({username, password}: {
    username: string,
    password: string
}): Promise<{access_token : string} | INestError > => {
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

export const useRegisterMutation = () => {
    return useMutation(register);
}

const register = async ({username, email, password}: {
    username: string,
    email: string,
    password: string
}): Promise<Response> => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, email, password}),
    });
    return response.json();
}
