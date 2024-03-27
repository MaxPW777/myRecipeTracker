import React from 'react'
import Image from 'next/image'
function Header() {
    return (
        <header className='w-full h-6 border-b border-accent rounded-md flex items-center'>
            <Image src={''} alt='logo' />
            <nav className='rounded-full border md:bg-black'><ul></ul></nav>
        </header>
    )
}

export default Header