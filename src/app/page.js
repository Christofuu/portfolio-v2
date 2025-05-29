import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full w-screen">
      <div className="flex flex-col justify-between items-center px-14 mb-8 h-60 my-4">
        <h1 className="md:text-3xl font-light text-center">Hi, I&apos;m Chris.</h1>
        <Image
          src="/pfp.jpg"
          className="rounded-full mx-auto"
          width="100"
          height="100"
          alt="logo"
        />
        <p className="text-xs md:text-base mt-2">
          I&apos;m a full-stack software developer and lifelong student with a
          passion for tech, music, and self-growth.
        </p>
        <Link href="/contact-me">
          <button
            href="/contact-me"
            className=" h-10 w-48 border border-solid rounded border-secondary text-secondary text-lg tracking-widest"
          >
            CONTACT ME
          </button>
        </Link>
      </div>
      <div className="text-2xl flex flex-col bg-primary-light w-screen h-72 items-center justify-evenly ">
        <a>About Me</a>
        <a>My Resume</a>
        <a>My Projects</a>
      </div>
    </div>
  );
}
