"use client";
import { FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Image from "next/image";
import { FaArrowTurnDown } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import FloatingShapes from "./ui/FloatingShapes";

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/christofuu",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/chrismdev",
      label: "LinkedIn",
    },
    {
      icon: FiYoutube,
      href: "https://youtube.com/@christofuu",
      label: "YouTube",
    },
    { icon: FiMail, href: "mailto:cdovedev@gmail.com", label: "Email" },
  ];

  return (
    <motion.section
      id="home"
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col w-full justify-between px-4 sm:px-6 lg:px-8"
    >
      <FloatingShapes />

      <div className="w-full px-16 flex flex-col h-4/5 justify-between">
        {/* Top Section */}
        <div className="w-full flex items-start justify-start pt-20">
          <div className="flex-col">
            <h1 className="text-6xl font-light pb-6 text-left md:text-6xl dark:text-gray-200 text-primary-900">
              Christopher Dove
            </h1>
            <p className="text-lg tracking-wider text-left md:text-3xl dark:text-gray-300 text-primary-900 mb-8 max-w-2xl leading-relaxed">
              <IoMdPin className="inline-block mr-2" />
              San Diego, CA
            </p>
            <div className="flex items-start">
              <motion.button
                onClick={() => scrollToSection("contact")}
                className={`
                  relative overflow-hidden 
                  bg-transparent border-2 dark:border-secondary dark:text-secondary-100
                  px-8 py-3 rounded-md font-medium tracking-wider
                  transition-all duration-300 ease-out
                  dark:hover:text-white dark:hover:bg-secondary hover:shadow-lg dark:hover:shadow-secondary-300/25
                  text-secondary-200 hover:bg-secondary-700 bg-gray-900 hover:text-white
                `}
                whileHover={{
                  y: -2,
                  boxShadow: "0 5px 15px rgba(79, 209, 199, 0.4)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  whileHover={{
                    left: "100%",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                />

                <span className="relative z-10">Let&apos;s Talk</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col items-end pb-8">
          <h2 className="md:text-6xl text-right text-5xl font-light tracking-wider dark:text-gray-300 text-primary-900 mb-8 leading-relaxed">
            Full-Stack Developer
          </h2>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-secondary-700 dark:text-gray-300 dark:hover:text-secondary-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
          
          {/* Separator line */}
        </div>
          <span className="flex items-center justify-center w-full h-2">
            <p className="text-gray-500 dark:text-gray-400">see more..</p>
           <FaArrowTurnDown className="text-gray-500 dark:text-gray-400 mt-4 animate-bounce" size={24} />
            </span>
      </div>
    </motion.section>
  );
}