'use client'
import Link from 'next/link'
import { useState } from 'react'
export function CursoButton ({modulo}) {
    const [route, setRoute] = useState('/curso/');
    const handleClick = (modulo) => {
        setRoute(`/curso/${modulo.slug}`);
        console.log(route)
    };


    return (
        <Link href={route} >
            <h2 onClick={() => handleClick(modulo)}>{modulo.frontmatter.title}</h2>
        </Link>
    )
}