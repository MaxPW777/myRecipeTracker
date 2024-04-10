"use client"
import './login.css'

function LoginForm() {
    const onSubmit = () => {
        console.log("logged")
    }
    return (
        <form className={'flex'} action={onSubmit}>
            <input type={"file"}
                   className={'aspect-square h-1/3 rounded-full bg-secondarybg border-border border flex items-center justify-center'}>
            </input>
            <div className={'flex flex-col gap-4'}>
                <input placeholder={'Username'} type="text"/>
                <input placeholder={'Email'} type="email"/>
                <input placeholder={'Password'} type="password"/>
                <input className={'w-min'} type="submit"/>
            </div>
        </form>
    )
}

export default LoginForm
