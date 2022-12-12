import React from "react";
import Image from "next/image";
import profilePic from "../public/assets/profilePic.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240 m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest text-[#b5bfc1] uppercase">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Life Long Learner | US Army Veteran | Local in Grand Rapids, MI
          </p>
          <p className="py-2 text-gray-600">
            I have a passion for creating things which has led me to sharpening
            my skills and delivering software for the past year. I am someone
            who takes the upmost pride in my work and will deliver high-quality
            products. I love working with others to solve problems and identify
            solutions. I will always communicate and verify before leaving
            anyone in the dark and I strive to always place business value
            first!
          </p>
          <p className="py-2 text-gray-600">
            I have a non-traditional path to software development to say the
            least. I was born and raised in a small town outside of Grand
            Rapids, MI playing sports and working construction through my
            childhood and into becoming a young adult. I attended college at
            Central Michigan University studying biology and entering the ROTC
            program. I also enlisted in the Michigan Army National Guard as an
            infantryman at 18 years old. I quickly grew to realize that I had a
            passion for the challenges that the Army presented. Following
            graduation, I commissioned as an Active Duty Officer in the US Army
            and spent my next 4 years working on and leading teams of some of
            the greatest men and women in the country. Although leaving the
            military was bittersweet, I knew that it was time to move on to
            something different. I decided to push myself towards a new
            challenge and find another passion, this led me to software
            development and getting the chance to work with people like you to
            bring ideas to life, connect individuals and businesses to
            opportunities, and grow together.
          </p>
          <p className="py-2 text-gray-600">
            Check out some of my latest Projects!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl bg-[#b5bfc1] shadow-gray-400 rounded-3xl flext items-center justify-center p-4">
          <Image
            className="w-full max-w-400 p-2 rounded-3xl "
            src={profilePic}
            width="800"
            height="1600"
            alt="Pic of Me"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
