"use client"
import './login.css'
import {useLoginMutation} from "@/src/services/authentication";

function LoginForm() {
    const loginMutation = useLoginMutation()

    const onSubmit = () => {
        loginUser({username: "admin", password: "admin"}).then(() => {
            console.log("logged")
        })
        console.log("logged")
    }

    const loginUser = async ({username, password}: {
        username: string,
        password: string
    }) => {
        const response = await loginMutation.mutateAsync({
            username, password
        }).then((response) => {
            console.log(response)
            localStorage.setItem("token", response[access_token])
        })
    };

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
