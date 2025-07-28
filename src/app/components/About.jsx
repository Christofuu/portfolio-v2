"use client";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Image from "next/image";
export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Express.js",
    "Next.js",
    "Docker",
    "MySQL",
    "MongoDB",
    "Java",
    "C++"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl dark:text-gray-200 text-primary-900 leading-relaxed">
                I&apos;m a San Diego native and a computer science major at San
                Diego State University. I currently work as a full stack
                software developer for <a href="https://www.daedastream.com" target="_blank" alt="A link to the Daedastream website." className="decoration-0 dark:text-secondary-300 text-[#2A80FF] font-medium hover:text-secondary-500">Daedastream</a>, where I&apos;ve been making
                enterprise software for local companies for over three years.
              </p>
              <p className="text-xl dark:text-gray-200 text-primary-900 leading-relaxed">
                When I&apos;m not at school or working, you can find me playing
                guitar, at my MMA gym, or even bombing at the local comedy
                club&apos;s open mic.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-4 py-2 rounded-full border-2 dark:border-e-secondary-light dark:border-t-secondary-light border-e-primary-100 border-gray-600 border-t-primary-100 dark:text-tan text-primary-900 font-semibold text-base tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-primary-500/20  flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-emerald-400">
                  <Image
                    src="/pfp.jpg"
                    alt="Chris MDove"
                    width={500}
                    height={500}
                    className=" mx-auto shadow-lg rounded-2xl"
                  />

                  {/* <p className="text-sm opacity-60">Professional Photo</p> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
