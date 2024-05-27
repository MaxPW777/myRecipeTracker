"use client"
import Link from 'next/link';
import Image from "next/image";
import useIsMobile from '@/src/hooks/useIsMobile'
import {useState} from 'react';

function Navbar() {
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const links = (
        <>
            <li>
                <Link href={'/recipes'}>My Recipes</Link>
            </li>
            <li>
                <Link href={'/search'}>Search by Ingredients</Link>
            </li>
            <li>
                <Link href={'/'}><Image className={'w-12'}
                                        width={456} height={547}
                                        src={'/logo.png'}
                                        alt={'logo'}/></Link>
            </li>
            <li>
                <Link href={'/settings'}>Profile</Link>
            </li>
            <li>
                <Link href={'/ingredients'}>My Ingredients</Link>
            </li>
        </>
    );

    if (isMobile) {
        return (
                <nav className='relative'>
                <button className='rounded-full w-14 h-14 border-2 border-accent ml-auto flex items-center justify-center' onClick={toggleDropdown}>
                    ☰
                </button>
                {isOpen && (
                    <ul className='absolute z-20 top-full right-0 mt-5 w-56 bg-mainbg text-lg border-2 border-accent p-4 gap-7 flex flex-col items-end rounded-lg shadow-lg'>
                        <li>
                            <Link href={'/recipes'}>My Recipes</Link>
                        </li>
                        <li>
                            <Link href={'/search'}>Search by Ingredients</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/settings'}>Profile</Link>
                        </li>
                        <li>
                            <Link href={'/ingredients'}>My Ingredients</Link>
                        </li>
                    </ul>
                )}
            </nav>
        );
    }

    return (
        <nav className='p-2 h-14 w-full flex items-center'>
            <ul className='flex w-full items-center justify-between gap-4'>
                {links}
            </ul>
        </nav>
    )
}

export default Navbar;
