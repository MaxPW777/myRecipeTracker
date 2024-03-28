"use client"
// Custom hook to check for mobile device
import { useState, useEffect } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => window.innerWidth < 768;
        setIsMobile(checkIfMobile());
        const handleResize = () => {
            setIsMobile(checkIfMobile());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

export default useIsMobile;
