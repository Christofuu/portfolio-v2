"use client";

import { sendEmail } from "../utils/send-email";
import { useForm } from "react-hook-form";

import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    sendEmail(data);
  };


  return (
    <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
        Contact me.
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium dark:text-gray-200 text-primary-900 mb-4">
              Let&apos;s Connect
            </h3>
            <p className="dark:text-gray-200 text-primary-900 leading-relaxed">
              Have any inquiries, comments, death threats, and/or confessions of
              undying love? Send me a message, I&apos;ll do my best to get back
              to you within two business days!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600/20 flex items-center justify-center">
                <FiMail className="h-5 w-5 text-primary-500" />
              </div>
              <span className="dark:text-gray-200 text-primary-900">cdovedev@gmail.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center">
                <FiLinkedin className="h-5 w-5 text-primary-500" />
              </div>
              <span className="dark:text-gray-200 text-primary-900">/in/chrismdev</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center">
                <FiGithub className="h-5 w-5 text-primary-500" />
              </div>
              <span className="dark:text-gray-200 text-primary-900">/christofuu</span>
            </div>
          </div>
        </div>
        <div className="bg-primary-500/10 rounded-xl border border-primary-100/20  p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col items-start my-2">
              <label className="text-sm mb-2 w-full dark:text-gray-200 text-primary-900">Name:</label>
              <input
                type="text"
                className="w-full border border-solid border-secondary bg-primary-dark text-gray-200 placeholder-gray-400 rounded p-2 "
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex flex-col items-start my-2">
              <label className="text-sm mb-2 dark:text-gray-200 text-primary-900">Email:</label>
              <input
                type="email"
                className="w-full border border-solid border-secondary bg-primary-dark text-gray-200 placeholder-gray-400 rounded p-2 "
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col items-start my-2">
              <label className="text-sm mb-2 dark:text-gray-200 text-primary-900">Message:</label>
              <textarea
                className="w-full border border-solid border-secondary bg-primary-dark text-gray-200 placeholder-gray-400 rounded p-2 "
                placeholder="Your Message"
                rows="5"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div className="mt-12 text-center">
              <motion.button
            type="submit"
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

            <span className="relative z-10">SEND</span>
          </motion.button>
            </div>
          </form>
        </div>
      </div>
        </motion.div>
      </div>
    </div>
  );
}
