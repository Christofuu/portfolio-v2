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
      <h1 className="text-3xl md:text-4xl font-light text-center mb-16 text-gray-100">
        Contact me.
      </h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-100 mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Have any inquiries, comments, death threats, and/or confessions of
              undying love? Send me a message, I&apos;ll do my best to get back
              to you within two business days!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center">
                <FiMail className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-gray-300">cdovedev@gmail.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center">
                <FiLinkedin className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-gray-300">linkedin.com/in/chrismdev</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center">
                <FiGithub className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-gray-300">github.com/christofuu</span>
            </div>
          </div>
        </div>
        <div className="bg-primary-500/10 rounded-xl border border-primary-100/20  p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col items-start my-2">
              <label className="text-sm mb-2 w-full">Name:</label>
              <input
                type="text"
                className="w-full border border-solid border-secondary bg-primary-dark text-gray-200 placeholder-gray-400 rounded p-2 "
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex flex-col items-start my-2">
              <label className="text-sm mb-2">Email:</label>
              <input
                type="email"
                className="w-full border border-solid border-secondary bg-primary-dark text-gray-200 placeholder-gray-400 rounded p-2 "
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col items-start my-2">
              <label className="text-sm mb-2">Message:</label>
              <textarea
                className="w-full border border-solid border-secondary bg-primary-dark text-gray-200 placeholder-gray-400 rounded p-2 "
                placeholder="Your Message"
                rows="5"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="h-10 w-48 mt-4 border border-solid rounded border-secondary  text-secondary text-lg tracking-widest hover:text-secondary-light"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
        </motion.div>
      </div>
    </div>
  );
}
