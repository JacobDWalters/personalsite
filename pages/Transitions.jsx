import React from "react";
import Link from "next/link";
import transition from "../public/assets/projects/transition.png";
import Image from "next/image";
import { RxGear } from "react-icons/rx";

const Transitions = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full bg-black/80 z-10 h-[30vh] lg:h-[40vh]" />
        <Image
          alt="/"
          src={transition}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 py-2>Hacking Transitions</h2>
          <h3>Next.js / Redux / PostgreSQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Write out my overview of the project and try your best not to make
            it suck too bad becuase someone someday might read it and laugh at
            you if it is terrible and you sound like and idiot and you probably
            will becasue you are in fact a huge idiot and do not know what in
            fact you are doing.
          </p>
          <a href="https://galvanize-transitions.onrender.com/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Deployed Site</button>
          </a>

          <a
            href="https://github.com/JacobDWalters/hacking-transitions"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-100 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RxGear className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RxGear className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RxGear className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RxGear className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RxGear className="pr-1" /> Axios
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RxGear className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RxGear className="pr-1" /> Socket.io
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className="hover:underline cursor-pointer w-min ml-10">Back</p>
      </Link>
    </div>
  );
};

export default Transitions;
