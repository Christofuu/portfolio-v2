"use client";
import { FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Image from "next/image";
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
      className="min-h-screen flex items-start pt-12 md:pt-40 justify-center px-4 sm:px-6 lg:px-8"
    >
      <FloatingShapes />

      <div className="max-w-6xl min-w-fit mx-auto text-center flex flex-col md:flex-row-reverse md:gap-x-48 gap-12 ">
        <div className="max-w-2xl  h-full ">
          <h1 className="!md:text-8xl text-6xl font-light pb-12 text-left md:text-6xl dark:text-gray-200 text-primary-900">
            Hi. I&apos;m Chris.
          </h1>{" "}
          <p className="text-lg tracking-wider  text-left md:text-xl dark:text-gray-300 text-primary-900 mb-8 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a San Diego native and a full-stack developer with over
            four years of web and mobile app development. Outside of tech I love
            making music, jiu jitsu, and spending time outdoors. Take a look
            around, or reach out using my links here.
          </p>
          {/* Contact me */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            className={`
        relative overflow-hidden
        bg-transparent border-2 dark:border-secondary dark:text-secondary-100
        px-8 py-3 rounded-md font-medium tracking-wider
        transition-all duration-300 ease-out
        dark:hover:text-white dark:hover:bg-secondary hover:shadow-lg dark:hover:shadow-secondary-300/25
        text-secondary-200 hover:bg-secondary-700 bg-secondary-900 hover:text-white
        
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

            <span className="relative z-10">CONTACT ME</span>
          </motion.button>
        </div>
        <div className="space-y-8">
          {/* Rasterized Art Circle */}
          <div className="relative flex items-center justify-center py-4 ">
            {/* Rotating Rings */}
            <motion.div
              className="absolute w-80 h-80 border-2 border-secondary-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
            />

            <motion.div
              className="absolute w-80 h-80 border-2 border-secondary-300/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 12,
                ease: "linear",
                repeat: Infinity,
              }}
            />

            {/* Pulsing Shadow */}
            <motion.div
              className="absolute w-80 h-80 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 4px rgba(79, 209, 199, 0.3)",
                  "0 0 0 20px rgba(79, 209, 199, 0.1)",
                  "0 0 0 4px rgba(79, 209, 199, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />

            {/* Profile Image */}
            <motion.div
              className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-2 border-secondary-300/50"
              whileHover={{
                scale: 1.05,
                rotate: 5,
                boxShadow: "0 0 0 8px rgba(79, 209, 199, 0.5)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Image
                src="/bigcodingguy1.png"
                className="rounded-full mx-auto object-cover"
                width={320}
                height={320}
                alt="logo"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
