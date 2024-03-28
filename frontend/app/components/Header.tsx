import React from 'react'
import Navbar from './Navbar'
function Header() {
    return (
        <header className='w-full bg-secondarybg h-20 border-b-4 border-accent rounded-b-md flex items-center justify-around text-white'>
            <h1 className='text-xl'>LOGO</h1>
            <Navbar />
        </header>
    )
}

export default Header
