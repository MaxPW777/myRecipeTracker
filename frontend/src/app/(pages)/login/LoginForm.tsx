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

    if (loginMutation.data && "access_token" in loginMutation.data){
        localStorage.setItem('token', loginMutation.data.access_token);
        window.location.href = '/';
    }

    if (registerMutation.data && "access_token" in registerMutation.data){
        localStorage.setItem('token', registerMutation.data.access_token);
        window.location.href = '/';
    }

    return (
        <div
            className="flex flex-col items-center justify-center text-white">
            <p>test user : Username: FroozZ, mdp: motdepasse</p>
            {loginMutation.data && "message" in loginMutation.data && (
                <p className={'text-red-700'}>{loginMutation.data.message}</p>
            )}
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
