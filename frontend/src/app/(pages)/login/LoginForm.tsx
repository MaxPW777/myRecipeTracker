"use client";
import './login.css';
import {useState} from 'react';
import {
    useLoginMutation,
    useRegisterMutation
} from "@/src/services/authentication";

function LoginForm() {
    const [isRegistering, setIsRegistering] = useState(false);
    const loginMutation = useLoginMutation();
    const registerMutation = useRegisterMutation();

    const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const username = form.username.value;
        const password = form.password.value;
        loginUser({username, password}).then(r => console.log(r));
    };

    const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        registerUser({username, email, password}).then(r => console.log(r));
    };

    const loginUser = async ({username, password}: {
        username: string,
        password: string
    }) => {
        loginMutation.mutate({username, password});
    };

    const registerUser = async ({username, email, password}: {
        username: string,
        email: string,
        password: string
    }) => {
        registerMutation.mutate({username, email, password});
    };

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <div
            className="flex flex-col items-center justify-center text-white">
            {isRegistering ? (
                <form onSubmit={onSubmitRegister} className="form">
                    <h2 className="text-xl mb-4">Register</h2>
                    <label>
                        Username:
                        <input type="text" name="username" required/>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" required/>
                    </label>
                    <button type="submit">Register</button>
                    <p className="mt-4">
                        Already have an account?{' '}
                        <button type="button" onClick={toggleForm}
                                className="text-blue-500 underline">
                            Login
                        </button>
                    </p>
                </form>
            ) : (
                <form onSubmit={onSubmitLogin} className="form">
                    <h2 className="text-xl mb-4">Login</h2>
                    <label>
                        Username:
                        <input type="text" name="username" required/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" required/>
                    </label>
                    <button type="submit">Login</button>
                    <p className="mt-4">
                        Don't have an account?{' '}
                        <button type="button" onClick={toggleForm}
                                className="text-blue-500 underline">
                            Register
                        </button>
                    </p>
                </form>
            )}
        </div>
    );
}

export default LoginForm;
