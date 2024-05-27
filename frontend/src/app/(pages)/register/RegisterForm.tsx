"use client";
import { useCreateUserMutation, useGetAllUsersQuery } from '@/src/services/users';
import './register.css';
import User from '@packages/types/IUser';

import { FormEvent, useState } from 'react';


function RegisterForm() {
    const { data: users, isLoading, isError } = useGetAllUsersQuery();
    const createUserMutation = useCreateUserMutation();
    const [user, setUser] = useState<User>({
        username: '',
        email: '',
        password: ''
    });

    const [usernameValid, setUsernameValid] = useState(false);
    const [mailValid, setMailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [matching, setMatching] = useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const username = event.target.value;
        const isValid = regexUsername.test(username);
        setUsernameValid(isValid);
        document.getElementById('usernameError')!.innerText = isValid ? '' : 'Username must be between 6 and 15 characters';
        setUser({ ...user, username });
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        const isValid = regexMail.test(email);
        setMailValid(isValid);
        document.getElementById('emailError')!.innerText = isValid ? '' : 'Invalid email';
        setUser({ ...user, email });
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;
        const isValid = regexPassword.test(password);
        setPasswordValid(isValid);
        document.getElementById('passwordError')!.innerText = isValid ? '' : 'Password must meet criteria';
        setUser({ ...user, password });
    };

    const matchPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPassword = event.target.value;
        const isValid = confirmPassword === user.password;
        setMatching(isValid);
        document.getElementById('confirmError')!.innerText = isValid ? '' : 'Passwords do not match';
    };

    const checkIfUserExists = async (user: User) => {
        var res = false;
        if (users)
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === user.username) {
                alert('Username already taken');
                res = true;
            }
            if (users[i].email === user.email) {
                alert('Email already taken');
                res = true;
            }
        }
        return res;
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!mailValid || !passwordValid || !matching || !usernameValid) {
            return;
        }
        if (await checkIfUserExists(user)) {
            return;
        }
        try {
            createUserMutation.mutate(user);
            window.location.href = '/';
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
    

    var regexMail = new RegExp ('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    var regexPassword = new RegExp ('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()_+[\\]{}|;:,.<>?]).{8,}$');
    var regexUsername = new RegExp('^.{6,15}$');

    return (
        <form className={'flex'} onSubmit={onSubmit}>
            <div className={'flex flex-col gap-4'}>
                <div>
                    <input name="username" placeholder={'Username'} type="text" onChange={handleUsernameChange} />
                    <p className='text-red-500' id='usernameError'></p>
                </div>
                <div>
                    <input name="email" placeholder={'Email'} type="email" onChange={handleEmailChange} />
                    <p className='text-red-500' id='emailError'></p>
                </div>
                <div>
                    <input name="password" placeholder={'Password'} type="password" onChange={handlePasswordChange} />
                    <p className='text-red-500' id='passwordError'></p>
                </div>
                <div>
                    <input name="passwordConfirm" placeholder={'Confirm Password'} type="password" onChange={matchPassword}/>
                    <p className='text-red-500' id='confirmError'></p>
                </div>
                <input className={'w-min'} type="submit"/>
            </div>
        </form>
    );
}

export default RegisterForm;
