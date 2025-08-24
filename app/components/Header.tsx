"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const handleClick = (href: string) => (e: React.MouseEvent) => {
        if (pathname === href) {
            e.preventDefault();
            window.location.reload(); // ✅ Hard reload, like pressing F5
        }
    };

    return (
        <header className="px-8 text-md">
            <nav>
                <ul className="flex w-full h-16 justify-between items-center">
                    <div className="flex gap-6">
                        <li>
                            <Link href="/" onClick={handleClick("/")}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" onClick={handleClick("/projects")}>
                                Projects
                            </Link>
                        </li>
                    </div>
                    <li>
                        <Link
                            href="/me"
                            onClick={handleClick("/me")}
                            className="inline-block hover:underline animate-bounce"
                        >
                            Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
