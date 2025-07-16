"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { LiaHamburgerSolid } from "react-icons/lia";

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers = [];

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px", // Trigger when section is 20% into view
      threshold: 0,
    };

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          handleIntersection,
          observerOptions
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}

const variants = {
  opened: {
    y: "0%",
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  closed: {
    y: "-100%",
    transition: {
      delay: 0.1,
      duration: 0.43,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

const links = [
  { href: "/", label: "Home", sectionId: "home" },
  { href: "#about", label: "About Me", sectionId: "about" },
  { href: "#resume", label: "Resume", sectionId: "resume" },
  { href: "#projects", label: "Projects", sectionId: "projects" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
  { href: "blog", label: "Blog", sectionId: "blog" },
];

export function Hamburger() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);

  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  const sectionIds = links.map((link) => link.sectionId);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    if (pathname === "/" && activeSection) {
      const matchingLink = links.find(
        (link) => link.sectionId === activeSection
      );
      if (matchingLink) {
        setActiveLink(matchingLink.href);
      }
    }
  }, [activeSection, pathname]);

  // update useState when link is clicked
  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  // useEffect to update active link on pathname change
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <>
      <div ref={ref} className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center"
        >
          <LiaHamburgerSolid className="text-white" size={25} />
        </button>
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "tween" }}
          variants={variants}
          className="flex flex-col items-center gap-2 pt-4 fixed top-0 right-0 w-screen h-70 bg-primary-light shadow-md z-50"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={true}
              className="text-md md:text-lg text-primary-900 dark:text-secondary hover:text-secondary-light hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <text className="text-xs pb-2 text-secondary/50">
            its a hamburger menu. get it? haha please hire me
          </text>
        </motion.nav>
      </div>
      <div className="hidden md:flex items-center">
        <nav className="flex gap-4 ">
          {links.map((link) => (
            <Link
              onClick={() => handleLinkClick(link.href)}
              key={link.href}
              href={link.href}
              className={`md:text-base text-md tracking-wider font-light text-primary-900 dark:text-secondary-100 dark:hover:text-warning-500 transition-colors relative ${
                activeLink === link.href ? "text-warning-500" : ""
              }`}
            >
              {link.label}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 dark:bg-secondary-light"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: activeLink === link.href ? 1 : 0 
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut",
                  type: "tween"
                }}
                style={{ transformOrigin: "center" }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}