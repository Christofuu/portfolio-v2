'use client'
 
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Hamburger } from './mobile-menu'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="bg-tertiary text-primary-lightest h-16 flex flex-row items-center justify-between px-4">
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        chrismdove.com
      </Link>
      <Hamburger />
    </div>
  )
}