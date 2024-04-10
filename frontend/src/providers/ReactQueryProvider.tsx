"use client"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

interface ReactQueryProviderProps {
    children : React.ReactNode
}

function ReactQueryProvider({children} : ReactQueryProviderProps){
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryProvider
