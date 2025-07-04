import Image from "next/image";
import Link from "next/link";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full w-screen">
      {/* Uncomment this section if you want to use the original hero section */}
      {/* <div className="flex flex-col  px-14 h-fit min-h-screen mt-4">
        <h1 className="md:text-3xl text-3xl font-light py-4 ">Hi, I&apos;m Chris.</h1>
        <Image
          src="/bigcodingguy.png"
          className="rounded-full mx-auto"
          width="500"
          height="500"
          alt="logo"
        />
        <p className="text-lg font-light md:text-base text-center py-4">
          I&apos;m a full-stack software developer and lifelong student with a
          passion for tech, music, and self-growth.
        </p>
        <Link href="/contact-me" className="mx-auto ">
          <button
            href="/contact-me"
            className=" h-16 w-56 font-medium border border-solid hover:text-secondary-light rounded border-secondary text-secondary text-lg tracking-widest"
          >
            CONTACT ME
          </button>
        </Link>
      </div> */}
      <Hero />
      <About />
      {/* <div id="about-me" className="text-2xl flex flex-col bg-primary-light w-screen lg:w-3/5 h-screen items-start px-10">
        <h2 className="py-6 text-sm font-semibold text-start">ABOUT ME</h2>
        <p className="text-base font-light md:text-xl px-2 text-start">
          I&apos;m a San Diego native and a computer science major at San Diego State University. I worked as a full stack web developer for the past two years at Daedastream, a local software consulting firm.
          When I&apos;m not at school or working, you can find me playing guitar, at my MMA gym, or even bombing at the local comedy club&apos;s open mic.

        </p>
      </div> */}
      <br/>
      {/* <div id="resume" className="text-2xl flex flex-col bg-primary-light w-screen lg:w-3/5 h-fit px-10 py-6 ">
        <h2 className="py-6 text-sm font-semibold text-start">RESUME</h2>
        <div className="bg-primary-lighter rounded shadow-md p-6">
          <h3 className="text-lg font-medium pb-2">Education</h3>
          <ul className="list-disc px-8">
            <li className="text-base md:text-lg px-2">
              B.S. in Computer Science, San Diego State University (Expected Graduation: May 2026)
            </li>
            <li className="text-base md:text-lg px-2">
              Associates in Computer Science, San Diego Mesa College (Graduated: May 2023)
            </li>
          </ul>
          <h3 className="text-lg pt-4 pb-2 font-medium">Work</h3>
          <ul className="">
            <li className="text-base md:text-lg pb-2">
              <h4 className="text-sm font-medium">

              Full Stack Web Developer, Daedastream (June 2022 - Present)
              </h4>
              <ul className="list-disc px-4 *:pb-1 md:*:ml-6">
                <li className="text-sm md:text-base">
                  Developed and maintained full stack web applications using Next.js, React, Node.js, and MySQL
                </li>
                <li className="text-sm md:text-base">
                  Collaborated with clients to gather requirements and deliver solutions
                </li>
                <li className="text-sm md:text-base">
                  Implemented responsive design and accessibility best practices
                </li>
                <li className="text-sm md:text-base">
                  Gained experience in designing and implementing RESTful APIs, system architecture design, and database management
                </li>
              </ul>
            </li>
            <li className="text-base md:text-lg px-2">
              <h4 className="text-sm font-semibold">


              Freelance Front End Developer (January 2021 - June 2022)
              </h4>
              <ul className="list-disc px-4 *:pb-1 md:*:ml-6">
                <li className="text-sm md:text-base">
                  Created, maintained, and redesigned websites for local businesses.
                </li>
                <li className="text-sm md:text-base">
                  Worked with clients to understand their needs and deliver custom solutions
                </li>
                <li className="text-sm md:text-base">
                  Gained experience in HTML, CSS, JavaScript, React, Web Hosting, and UI/UX design
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div> */}
      <Resume />
      <br/>
      {/* <div id="projects" className="text-2xl flex flex-col bg-primary-light w-screen lg:w-3/5 h-fit px-10 py-6">
        <h2 className="py-2">My Projects</h2>
        <p className="text-base md:text-lg py-2">None of them are that big, but they have great personality.</p>
        <ul className="list-disc px-10 py-4 *:py-2 bg-primary-lighter rounded shadow-md ">
          <li className="text-base md:text-lg px-2">
            Personal Portfolio Website (this one!)
            <ul className="list-disc px-4 ">
              <li className="text-sm md:text-base">
                Built with Next.js, Tailwind CSS, and React
              </li>
              <li className="text-sm md:text-base">
                Fully responsive and accessible!
              </li>
            </ul>
          </li>
          <li className="text-base md:text-lg px-2">
            ArBetter: Automatically find arbitrage betting opportunities from online sports books
            <ul className="list-disc px-4 ">
              <li className="text-sm md:text-base ">
                Fully functional and responsive CRUD app built with Next.js, Postgres, and Supabase
              </li>
              <li className="text-sm md:text-base ">
                Uses the Odds API to find arbitrage opportunities, users can use their own API key securely stored through asymmetric encryption
              </li>
            </ul>
          </li>
          <li className="text-base md:text-lg px-2">
            Chess Engine with Opponent AI
            <ul className="list-disc px-4 ">
              <li className="text-sm md:text-base ">
                A fully functional chess engine built in C++
              </li>
              <li className="text-sm md:text-base ">
                Playable A.I opponent with adjustable difficulty (Max ELO ~ 2200), using a minimax algorithm with alpha-beta pruning
              </li>
              <li className="text-sm md:text-base ">
                Good enough to beat my friend Alex, because I can&apos;t!
              </li>
            </ul>
          </li>
        </ul>
      </div> */}
      <Projects />
      <br/>
      
    </div>
  );
}
