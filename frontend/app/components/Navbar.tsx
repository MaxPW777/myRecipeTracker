"use client"
import { useEffect, useState } from 'react';
// If you're using Next.js, ensure to import Link from 'next/link'
import Link from 'next/link';

// Custom hook to check for mobile device
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

function Navbar() {
    const isMobile = useIsMobile();
    const links = [
        ['My Recipes', '/myrecipes'],
        ['My Ingredients', '/ingredients'],
        ['Settings', '/settings'],
        ['Categories', '/categories'],
    ];
    console.log("fuix");
    
    if (isMobile) {
        return (<nav className='rounded-full w-14 h-14 border-2 border-accent '>
            {/* Potentially add a hamburger menu or similar for mobile */}
        </nav>)
    }

    return (
        <nav className='p-2 h-14 border-2 border-accent '>
            <ul className='flex items-center justify-between gap-4'>
                {links.map((route) => {
                    return (
                        <li key={route[0]}>
                            <Link href={route[1]}>{route[0]}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;