"use client";
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
// import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website (this one!)',
      description: 'Fully responsive portfolio site written in Next.js with a simple backend for blogging.',
      technologies: ['Next.js', 'React', 'Node.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Arbitrage Betting Assistant',
      description: 'A real time betting assistant that helps users find arbitrage opportunities across multiple sportsbooks.',
      technologies: ['Next.js', 'Postgres', 'Supabase', 'Odds API'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Chess Engine with Opponent AI',
      description: 'A fully functional chess engine with a playable AI opponent using a minimax algorithm with alpha-beta pruning.',
      technologies: ['C++', 'CMake', 'Python' ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-gray-100">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card bg-emerald-600/10 backdrop-blur-sm rounded-xl border border-emerald-600/20 overflow-hidden"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                    src="/bigcodingguy.png"
                    height={200}
                    width={400}
                    alt="placeholder"
                    >
                        </Image>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveUrl}
                      className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium flex items-center gap-1"
                    >
                      View Project 
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-emerald-600 text-emerald-400 rounded-md hover:bg-emerald-600/10 transition-colors duration-200"
            >
              <span>View All Projects</span>
              
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
