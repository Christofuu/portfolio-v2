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
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-gray-100">
            Resume
          </h2>
          
          <div className="bg-emerald-600/10 backdrop-blur-sm rounded-xl border border-primary-lightest p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-medium text-gray-100 mb-6">Experience</h3>
                
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-secondary pl-4">
                      <h4 className="text-lg font-medium text-secondary">{exp.title}</h4>
                      <p className="text-gray-300 text-sm">{exp.company} • {exp.period}</p>
                      <p className="text-gray-300 mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium text-gray-100 mb-6">Education</h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-secondary pl-4">
                      <h4 className="text-lg font-medium text-secondary">{edu.degree}</h4>
                      <p className="text-gray-300 text-sm">{edu.institution} • {edu.period}</p>
                      <p className="text-gray-300 mt-2">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button
                onClick={handleDownload}
                className="border-2 border-primary-lightest hover:bg-primary-light text-white hover:text-secondary-light font-medium py-3 px-8 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                
                Download Full Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}