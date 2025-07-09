"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Image from "next/image";
export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-fit py-12 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={
            isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-light text-gray-100">
            Hi, I&apos;m Chris.
          </h1>

          {/* Rasterized Art Circle */}
          <div className="relative flex items-center justify-center py-4">
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
              className="absolute w-96 h-96 border-2 border-secondary-300/20 rounded-full"
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
                src="/bigcodingguy.png"
                className="rounded-full mx-auto object-cover"
                width="350"
                height="350"
                alt="logo"
              />
            </motion.div>
          </div>

          {/* Landing Text */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a full-stack software developer and lifelong student with a
            passion for tech, music, and self-growth.
          </p>

          {/* Contact me */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            className={`
        relative overflow-hidden
        bg-transparent border-2 border-secondary text-secondary
        px-8 py-3 rounded-md font-medium tracking-wider
        transition-all duration-300 ease-out
        hover:text-white hover:bg-secondary hover:shadow-lg hover:shadow-secondary-300/25
        
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
        </motion.div>
      </div>
    </section>
  );
}
