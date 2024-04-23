interface ErrorModuleProps {
    error: {
        statusCode: number
        message: string
    }
}

function ErrorModule({error}: ErrorModuleProps) {
    return (
        <div className={'flex flex-col justify-center items-center text-xl'}>
            <h1>ERROR ID: {error.statusCode}</h1>
            <p>MESSAGE: {error.message}</p>
        </div>
    )
}

export default ErrorModule
