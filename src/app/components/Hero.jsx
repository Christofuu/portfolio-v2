"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Image from 'next/image';
export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-fit py-12 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-light text-gray-100 mb-6">
            Hi, I&apos;m Chris.
          </h1>
          
          {/* Rasterized Art Circle */}
          <Image
          src="/bigcodingguy.png"
          className="rounded-full mx-auto"
          width="350"
          height="350"
          alt="logo"
        />
          
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a full-stack software developer and lifelong student with a passion for tech, music, and self-growth.
          </p>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-primary-lighter hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            CONTACT ME
          </button>
        </motion.div>
      </div>
    </section>
  );
}