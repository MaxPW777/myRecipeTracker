import { Users } from '../../../backend/src/api/users/schemas/users.schema';

const getAllUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    return response.json();
};

const getUserById = async (id: string) => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    return response.json();
}

const createUser = async (user : Users) => {
    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

const updateUser = async (id: string, user: Users) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

const deleteUser = async (id: string) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}

export default { 
    getAllUsers,
    getUserById,
    updateUser, 
    createUser,
    deleteUser 
};