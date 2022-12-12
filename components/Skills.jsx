import React from "react";
import Image from "next/image";
import css from "../public/assets/skills/css.png";
import github from "../public/assets/skills/github1.png";
import html from "../public/assets/skills/html.png";
import javascript from "../public/assets/skills/javascript.png";
import mongo from "../public/assets/skills/mongo.png";
import next from "../public/assets/skills/nextjs.png";
import node from "../public/assets/skills/node.png";
import postgres from "../public/assets/skills/postgres.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5b7379]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.javascript.com/"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div>
                  <Image
                    src={javascript}
                    alt="/"
                    width="64"
                    height="64"
                  ></Image>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div>
                  <Image src={react} alt="/" width="64" height="64"></Image>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://nextjs.org/">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div>
                  <Image src={next} alt="/" width="64" height="64"></Image>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next.js</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://nodejs.org/en/docs/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div>
                  <Image src={node} alt="/" width="64" height="64"></Image>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Node.js</h3>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div>
                  <Image src={tailwind} alt="/" width="64" height="64"></Image>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.mongodb.com/home"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div>
                  <Image src={mongo} alt="/" width="64" height="64"></Image>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MongoDB</h3>
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.postgresql.org/"
          >
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div>
                  <Image src={postgres} alt="/" width="64" height="64"></Image>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>PostgreSQL</h3>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/">
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div>
                  <Image src={github} alt="/" width="64" height="64"></Image>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Git/GitHub</h3>
                </div>
              </div>
            </div>
          </a>

          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image src={html} alt="/" width="64" height="64"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div>
                <Image src={css} alt="/" width="64" height="64"></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
