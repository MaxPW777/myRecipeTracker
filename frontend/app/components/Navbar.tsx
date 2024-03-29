"use client"
// If you're using Next.js, ensure to import Link from 'next/link'
import Link from 'next/link';
import Image from "next/image";
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
        return (<nav className='rounded-full w-14 h-14 border-2 border-accent ml-auto'>
        </nav>)
    }

    return (
        <nav className='p-2 h-14 w-full flex items-center'>
            <ul className='flex w-full items-center justify-between gap-4'>
                <li>
                    <Link href={'/myrecipes'}>My Recipes</Link>
                </li>
                <li>
                    <Link href={'/ingredients'}>My Ingredients</Link>
                </li>
                <li>
                    <Link href={'/'}><Image className={'w-12'}
                                                    width={456} height={547}
                                                    src={'/logo.png'}
                                                    alt={'logo'}/></Link>
                </li>
                <li>
                    <Link href={'/settings'}>Settings</Link>
                </li>
                <li>
                    <Link href={'/categories'}>Categories</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;
