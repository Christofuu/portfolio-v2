"use client";

import { sendEmail } from "../utils/send-email";
import { useForm } from "react-hook-form";

import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    sendEmail(data);
  };
  return (
    <div className="flex flex-col items-center h-full">
      <div className="px-14 my-6 flex-col items-center">
        <h1 className="text-3xl font-light mb-2">Contact me.</h1>
        <p>
          Have any questions, comments, concerns, death threats and/or
          confessions of undying love? Feel free to reach out to me using my
          socials or the form below.
        </p>
      </div>
      <div className="flex flex-row items-center justify-evenly w-3/5 md:w-60 border mx-6 py-4 border-solid border-secondary rounded mb-6">
        <a href="https://www.linkedin.com/in/chrismdev" target="_blank">
          <FiLinkedin className="text-2xl" />
        </a>
        <a href="mailto:chrisdove1337@gmail.com">
          <FiMail className="text-2xl" />
        </a>
        <a href="https://github.com/Christofuu" target="_blank">
          <FiGithub className="text-2xl" />
        </a>
      </div>
      <div className=" bg-primary-lightest border-8 border-primary-light px-6 py-4 w-72 md:w-96  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center "
        >
          <div className="flex flex-col items-start my-2">
            <label className="text-sm mb-2">Name:</label>
            <input
              type="text"
              className="border border-solid border-secondary text-primary-dark rounded p-2 sm:w-60 md:w-80"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col items-start my-2">
            <label className="text-sm mb-2">Email:</label>
            <input
              type="email"
              className="border border-solid border-secondary text-primary-dark  rounded p-2 sm:w-60 md:w-80"
              placeholder="Your Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col items-start my-2">
            <label className="text-sm mb-2">Message:</label>
            <textarea
              className="border border-solid border-secondary rounded text-primary-dark p-2 sm:w-60 md:w-80"
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
  );
}
