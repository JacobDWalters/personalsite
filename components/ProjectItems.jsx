import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItems = ({ title, backgroundImg, projectUrl, tech }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5b7379] to-[#b5bfc1]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="Project Pic"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="text-center text-white pb-4 pt-2">{tech}</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
