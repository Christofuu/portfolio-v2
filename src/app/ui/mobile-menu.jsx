import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { LiaHamburgerSolid } from "react-icons/lia";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
}

const links  = [
    { href: "/", label: "Home" },
    { href: "/about-me", label: "About Me" },
    { href: "/", label: "Projects" },
    { href: "/", label: "Resume" },
    { href: "/contact-me", label: "Contact" }
];

export function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useOutsideClick(() => {
        setIsOpen(false);
    })
    
    return (
        <div ref={ref}>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
                <LiaHamburgerSolid className="text-white" size={25} />
            </button>
            <motion.nav
                animate={isOpen ? "open" : "closed"}
                transition={{type: "tween"}}
                variants={variants}
                className="flex flex-col items-center gap-2 pt-4 fixed top-0 right-0 w-screen h-70 bg-primary-light z-50"
            >
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="md:text-lg text-md text-secondary hover:text-secondary-light hover:underline transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                <text className="text-xs pb-2 text-secondary/50">its a hamburger menu. get it? haha please hire me</text>
            </motion.nav>
            
        </div>
    );
}