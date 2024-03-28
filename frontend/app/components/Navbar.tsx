"use client"
// If you're using Next.js, ensure to import Link from 'next/link'
import Link from 'next/link';
import useIsMobile from '../hooks/useIsMobile'

function Navbar() {
    const isMobile = useIsMobile();
    const links = [
        ['My Recipes', '/myrecipes'],
        ['My Ingredients', '/ingredients'],
        ['Settings', '/settings'],
        ['Categories', '/categories'],
    ];

    if (isMobile) {
        return (<nav className='rounded-full w-14 h-14 border-2 border-accent '>
        </nav>)
    }

    return (
        <nav className='p-2 h-14 w-full '>
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
