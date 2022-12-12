import React from "react";
import transition from "../public/assets/projects/transition.png";
import amazon from "../public/assets/projects/amazon.png";
import nba from "../public/assets/projects/nbaGG.png";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5b7379]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Hacking Transitions"
            backgroundImg={transition}
            projectUrl="/Transitions"
            tech="Next.js and PostgreSQL"
          />
          <ProjectItems
            title="Amazon Clone"
            backgroundImg={amazon}
            projectUrl="/Amazon"
            tech="Next.js and MongoDB"
          />
          <ProjectItems
            title="NBA Guessing Game"
            backgroundImg={nba}
            projectUrl="/Nba"
            tech="JQuery and APIs"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
