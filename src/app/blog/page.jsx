"use client";
import { motion  } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Image from "next/image";
import { Footer } from "../components/Footer";

export default function BlogHome() {
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
        "/bigcodingguy.png",
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
        "/bigcodingguy.png",
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
        "/bigcodingguy.png",
      readUrl: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center h-full w-screen">
      <div className="flex flex-col px-14 h-fit min-h-screen mt-4">
        <p className="text-lg font-light md:text-base text-center py-4">
          Welcome to my personal blog! I use this to publicize my thoughts,
          ideas, and manic ideations. Take a look around.
        </p>
        <div>
          <h2>Featured Posts</h2>
           <div className="max-w-6xl mx-auto">
                  
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
          
                    
                  
                </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}
