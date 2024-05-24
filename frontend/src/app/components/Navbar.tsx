"use client"
import Link from 'next/link';
import Image from "next/image";
import useIsMobile from '@/src/hooks/useIsMobile'

function Navbar() {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (<nav className='rounded-full w-14 h-14 border-2 border-accent ml-auto'>
        </nav>)
    }

    return (
        <nav className='p-2 h-14 w-full flex items-center'>
            <ul className='flex w-full items-center justify-between gap-4'>
                <li>
                    <Link href={'/recipes'}>My Recipes</Link>
                </li>
                <li>
                    <Link href={'/ingredients'}>Search by Ingredients</Link>
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
                    <Link href={'/categories'}>My Ingredients</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;
