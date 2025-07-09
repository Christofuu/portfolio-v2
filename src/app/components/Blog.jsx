"use client";
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
// import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function Blog() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices and patterns for creating maintainable React applications that scale...",
      date: "Dec 15, 2023",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      readUrl: "#",
    },
    {
      id: 2,
      title: "Deploying Apps with AWS Lambda",
      excerpt:
        "A comprehensive guide to serverless deployment using AWS Lambda and API Gateway...",
      date: "Dec 10, 2023",
      category: "AWS",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      readUrl: "#",
    },
    {
      id: 3,
      title: "Modern JavaScript Patterns",
      excerpt:
        "Exploring the latest JavaScript patterns and techniques that every developer should know...",
      date: "Dec 5, 2023",
      category: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
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
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-gray-100">
            Latest Blog Posts
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-emerald-600/10 backdrop-blur-sm rounded-xl border border-emerald-600/20 overflow-hidden hover:border-emerald-600/40 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  width={800}
                  height={400}
                  src="/bigcodingguy.png"
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-medium text-gray-100 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>

                  <a
                    href={post.readUrl}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                  >
                    Read More
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-emerald-600 text-emerald-400 rounded-md hover:bg-emerald-600/10 transition-colors duration-200"
            >
              <span>View All Posts</span>
              {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
