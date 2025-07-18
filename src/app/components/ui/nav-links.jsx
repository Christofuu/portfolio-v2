'use client'
 
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Hamburger } from './mobile-menu'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="dark:bg-primary bg-gray-900 dark:text-primary-lightest h-16 flex flex-row items-center justify-between px-4">
      <Link className={`link ${pathname === '/' ? 'active' : ''} dark:text-gray-300/90 text-gray-300 tracking-widest text-xl pl-6`} href="/">
        chrismdove.com
      </Link>
      <Hamburger />
    </div>
  )
}