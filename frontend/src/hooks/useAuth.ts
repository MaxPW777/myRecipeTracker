import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        if (!accessToken) {
            router.push('/login'); // Redirect to login page if not authenticated
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    return isAuthenticated;
};

export default useAuth;
