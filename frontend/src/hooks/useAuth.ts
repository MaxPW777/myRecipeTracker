import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            router.push('/login'); // Redirect to login page if not authenticated
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    return isAuthenticated;
};

export default useAuth;
