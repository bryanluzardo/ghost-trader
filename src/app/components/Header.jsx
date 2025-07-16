'use client'
import Link from 'next/link'
import { User } from "../svgs/User";
import { useState } from "react";
import "./Header.css"
import { DarkModeButton } from "../svgs/DarkModeButton";

export function Header () {
    const [darkMode, setDarkMode] = useState(false);
    const color = darkMode ? "white" : "red";

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <header>
            <h1><Link href="/">LOGO</Link></h1>
            <ul>
                <li><Link href="/planes">Planes</Link></li>
                <li><Link href="/program">Programa</Link></li>
                <li><Link href="/about">Sobre Nosotros</Link></li>
            </ul>
            <div className='botones'>
                <DarkModeButton handleClick={handleClick} color={color}/>
                <User color={color} />
            </div>
        </header>
    )
}