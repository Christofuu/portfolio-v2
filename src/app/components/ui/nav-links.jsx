'use client'
 
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Hamburger } from './mobile-menu'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="bg-primary-lightest/60 backdrop-filter backdrop-blur-md text-primary-lightest h-16 flex flex-row items-center justify-between px-4">
      <Link className={`link ${pathname === '/' ? 'active' : ''} text-gray-300/90 tracking-widest text-lg`} href="/">
        chrismdove.com
      </Link>
      <Hamburger />
    </div>
  )
}