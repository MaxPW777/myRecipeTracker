import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
    const onMobile = false
    const links = [
        ['My Recipes', '/myrecipes'],
        ['My Ingredients', '/ingredients'],
        ['Settings', '/settings'],
        ['Categories', '/categories'],
    ]
    return (
        <header className='w-full bg-secondarybg h-20 border-b-2 border-accent rounded-b-md flex items-center justify-around text-white'>
            <h1 className='text-xl'>LOGO</h1>
            <nav className='rounded-full w-14 h-14 border-2 border-accent md:bg-black'><ul>
                {onMobile && links.map((route: string[]) => {
                    return (
                        <Link key={route[0]} href={route[1]}>{route[0]}</Link>
                    )
                })}
            </ul></nav>
        </header>
    )
}

export default Header