import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center bg-primary">
      <div className="flex flex-col justify-between py-8 px-14 h-72">
        <h1 className="text-4xl font-light mb-2">Hi, I&apos;m Chris.</h1>
        <Image src="/pfp.jpg" className="rounded-full mx-auto"
          width="100" 
          height="100" 
          alt="logo" />
          <p className="mt-2">I&apos;m a full-stack software developer and lifelong student with a passion for tech, music, and self-growth.</p>
      </div>
      <button className="h-8 w-52 my-auto border border-solid rounded border-secondary text-secondary">Contact me.</button>
      <div className="flex flex-col bg-primary-light w-screen h-48 items-center justify-evenly mt-auto ">
        <a>What I Do</a>
        <a>My Resume</a>
        <a>My Projects</a>
      </div>
    </main>
  );
}
