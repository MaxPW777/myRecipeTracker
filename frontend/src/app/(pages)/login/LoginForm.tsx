"use client"
import './login.css'
import {useLoginMutation} from "@/src/services/authentication";

function LoginForm() {
    const loginMutation = useLoginMutation()


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const username = form.username.value
        const password = form.password.value
        loginUser({username, password}).then(r => console.log(r))
    }

    const loginUser = async ({username, password}: { username: string, password: string }) => {
        loginMutation.mutate({username, password})
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Username:
                <input type="text" name="username"/>
            </label>
            <label>
                Password:
                <input type="password" name="password"/>
            </label>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
