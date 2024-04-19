"use client";
import { useCreateUserMutation } from '@/src/services/users';
import './register.css';
import User from '@/src/types/User';

import { FormEvent, useState } from 'react'; // Importez FormEvent et useState depuis 'react'

function RegisterForm() {
    const createUserMutation = useCreateUserMutation();
    const [user, setUser] = useState<User>({ // Utilisez useState pour gérer l'état local de l'utilisateur
        username: '',
        email: '',
        password: ''
    });

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement

        try {
            await createUserMutation.mutateAsync(user); // Utilisez directement l'objet utilisateur
            console.log('Utilisateur créé avec succès!');
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création de l\'utilisateur:', error);
        }
    };

    // Fonctions pour mettre à jour les champs du formulaire
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, username: event.target.value });
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, email: event.target.value });
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, password: event.target.value });
    };

    return (
        <form className={'flex'} onSubmit={onSubmit}>
            <div className={'flex flex-col gap-4'}>
                <input name="username" placeholder={'Username'} type="text" value={user.username} onChange={handleUsernameChange} />
                <input name="email" placeholder={'Email'} type="email" value={user.email} onChange={handleEmailChange} />
                <input name="password" placeholder={'Password'} type="password" value={user.password} onChange={handlePasswordChange} />
                <input className={'w-min'} type="submit" />
            </div>
        </form>
    );
}

export default RegisterForm;
