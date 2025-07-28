"use client";
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Resume() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    alert('Resume download functionality would be implemented here');
  };

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Daedastream LLC',
      period: '2022 - Present',
      description: 'Led development of enterprise web applications using React, Node.js, and AWS cloud services.'
    },
    {
      title: 'Front End Developer',
      company: 'Freelance',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects, focusing on responsive design and performance optimization.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'San Diego State University',
      period: '2023 - 2026',
      description: 'Focus on software engineering and web development technologies.'
    },
    {
      degree: 'Associates in Computer Science',
      institution: 'San Diego Mesa College',
      period: '2019 - 2023',
      description: 'Foundational coursework in programming, algorithms, and database management.'
    }
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 dark:text-gray-300 text-primary-900 ">
            Resume
          </h2>
          
          <div className="bg-primary-500/20 backdrop-blur-sm rounded-xl border border-primary-lightest p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-medium dark:text-gray-300 text-gray-900  mb-6">Experience</h3>
                
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-secondary pl-4">
                      <h4 className="text-2xl font-medium  dark:text-secondary text-secondary-700">{exp.title}</h4>
                      <p className="dark:text-gray-300 text-primary-900  text-md">{exp.company} • {exp.period}</p>
                      <p className="dark:text-gray-300 text-primary-900  mt-2 font-semibold tracking-wide">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium ark:text-gray-300 text-gray-900 dark:text-gray-300 mb-6">Education</h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-secondary pl-4">
                      <h4 className="text-2xl font-medium  dark:text-secondary text-secondary-700">{edu.degree}</h4>
                      <p className="dark:text-gray-300 text-primary-900  text-md">{edu.institution} • {edu.period}</p>
                      <p className="dark:text-gray-300 text-primary-900  mt-2 font-semibold tracking-wide">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* TODO: Implement actual download functionality */}
            <div className="mt-12 text-center">
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

            <span className="relative z-10">DOWNLOAD RESUME</span>
          </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}