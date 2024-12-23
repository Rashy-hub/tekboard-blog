import React from 'react'
import Link from 'next/link'

interface Props {
    title: string
}

const Header = (props: Props) => {
    return (
        <header className="flex justify-between items-center h-fit p-4 bg-black text-white">
            <h1 className="felipa text-4xl font-bold">{props.title}</h1>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link className="hover:underline hover:text-gray-400" href="/">
                            Blog
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:underline hover:text-gray-400" href="/projects">
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
