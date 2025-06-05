import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { LiaHamburgerSolid } from "react-icons/lia";

const variants = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.1,
        duration: 0.43,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
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
        <>
            <div ref={ref} className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
                    <LiaHamburgerSolid className="text-white" size={25} />
                </button>
                <motion.nav
                    animate={isOpen ? "open" : "closed"}
                    transition={{type: "tween"}}
                    variants={variants}
                    className="flex flex-col items-center gap-2 pt-4 fixed top-0 right-0 w-screen h-70 bg-primary-light shadow-md z-50"
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
            <div className="hidden md:flex items-center">
                <nav className="flex gap-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="md:text-lg text-md text-secondary hover:text-secondary-light hover:underline transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>  
        </>
    );
}