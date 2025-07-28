"use client";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
// import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Image from "next/image";

export default function Blog() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices and patterns for creating maintainable React applications that scale...",
      date: "Dec 15, 2023",
      category: "React",
      image: "/bigcodingguy.png",
      readUrl: "#",
    },
    {
      id: 2,
      title: "Deploying Apps with AWS Lambda",
      excerpt:
        "A comprehensive guide to serverless deployment using AWS Lambda and API Gateway...",
      date: "Dec 10, 2023",
      category: "AWS",
      image: "/bigcodingguy.png",
      readUrl: "#",
    },
    {
      id: 3,
      title: "Modern JavaScript Patterns",
      excerpt:
        "Exploring the latest JavaScript patterns and techniques that every developer should know...",
      date: "Dec 5, 2023",
      category: "JavaScript",
      image: "/bigcodingguy.png",
      readUrl: "#",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={
            isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 dark:text-gray-200 text-primary-900">
            Blog (WIP)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-primary-500/60 backdrop-blur-sm rounded-xl border border-emerald-600/20 overflow-hidden hover:border-emerald-600/40 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  width={800}
                  height={400}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 dark:text-gray-200 text-primary-900  rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="dark:text-gray-200 text-primary-900 text-sm">
                      •
                    </span>
                    <span className="dark:text-gray-200 text-primary-900 text-sm">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium dark:text-gray-200 text-primary-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="dark:text-gray-200 text-primary-900 mb-4">
                    {post.excerpt}
                  </p>

                  <a
                    href={post.readUrl}
                    className="dark:text-gray-200 text-primary-900 hover:text-emerald-300 transition-colors text-sm font-medium"
                  >
                    Read More
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.button
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

              <span className="relative z-10">
                <a href="/blog">VIEW ALL (WIP)</a>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
