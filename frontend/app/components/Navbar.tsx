"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [onMobile, setOnMobile] = useState<boolean>()
    const links = [
        ['My Recipes', '/myrecipes'],
        ['My Ingredients', '/ingredients'],
        ['Settings', '/settings'],
        ['Categories', '/categories'],
    ]
    return (
        <nav className='rounded-full w-14 h-14 border-2 border-accent md:bg-black'><ul>
            {onMobile && links.map((route: string[]) => {
                return (
                    <Link key={route[0]} href={route[1]}>{route[0]}</Link>
                )
            })}
        </ul></nav>
    )
}

export default Navbar