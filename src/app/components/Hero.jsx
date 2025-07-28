 "use client";
import { FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { FaArrowTurnDown } from "react-icons/fa6";
import { LuChevronsDown } from "react-icons/lu";
import Image from "next/image";

import { IoMdPin } from "react-icons/io";

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
      href: "https://youtube.com/@christofuu", // Note: This URL might be a placeholder
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
      // Use a single flex container to space content between the top and bottom of the screen.
      // Added responsive padding (py) for vertical spacing on all screen sizes.
      className="min-h-screen flex flex-col w-full justify-between px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
    >
      {/* TOP CONTENT BLOCK */}
      <div className="w-full">
        {/* Responsive font size: smaller on mobile, larger on desktop. */}
        <h1 className="text-4xl font-bebas text-left sm:text-5xl lg:text-6xl dark:text-gray-200 text-primary-900 mb-0 leading-normal">
          Christopher Dove
        </h1>
        {/* Responsive font size and adjusted margin for smaller screens. */}
        <p className="text-lg tracking-wider text-left md:text-2xl dark:text-gray-300 text-primary-900 mb-4 max-w-2xl leading-relaxed">
          <IoMdPin className="inline-block mr-2" />
          San Diego, CA
        </p>
        <div className="flex items-start">
          <motion.button
            onClick={() => scrollToSection("contact")}
            className={`
              relative overflow-hidden
        bg-transparent border-2 border-secondary dark:text-secondary-100 text-primary-900 
        px-8 py-3 rounded-md font-medium tracking-wider
        transition-all duration-300 ease-out
        hover:text-white hover:bg-secondary hover:shadow-lg hover:shadow-secondary-300/25
            `}
            whileHover={{
              y: -2,
              boxShadow: "0 5px 15px rgba(79, 209, 199, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              whileHover={{ left: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <span className="relative z-10">LET&apos;S TALK</span>
          </motion.button>
        </div>
      </div>

      {/* PROFILE IMAGE */}
      <div className="flex justify-center mt-8 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden shadow-lg w-52 h-52 md:w-80 md:h-80 rounded-full md:border-8 border-gray-600  md:p-8"
        >
          <Image
            src="/bigcodingguy1.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* BOTTOM CONTENT BLOCK */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-end">
          {/* Responsive font size and text alignment. Left-aligned on mobile, right-aligned on desktop. */}
          <h2 className="text-4xl font-bebas text-left sm:text-5xl lg:text-6xl md:text-right font-light tracking-wider dark:text-gray-300 text-primary-900 mb-2 leading-relaxed">
            Full-Stack Developer
          </h2>

          {/* Social Links with responsive gap and alignment */}
          <div className="flex items-center justify-start md:justify-end gap-6 sm:gap-8 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-secondary-700 dark:text-gray-300 dark:hover:text-secondary-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* "See More" indicator centered at the bottom */}
        <div className="flex pb-16 flex-col  items-center justify-center w-full text-gray-500 dark:text-gray-400">
          <p>there&apos;s more...</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <LuChevronsDown className="mt-2" size={24} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}