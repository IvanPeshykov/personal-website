import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className='px-8 text-md'>
            <nav>
                <ul className="flex w-full h-16 justify-between items-center">
                    <div className='flex gap-6'>
                        <li>
                            <Link href="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:underline">Projects</Link>
                        </li>
                    </div>
                    <li>
                        <Link href="/me" className="inline-block hover:underline animate-bounce">Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
