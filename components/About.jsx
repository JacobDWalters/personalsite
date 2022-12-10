import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240 m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest text-[#5b7379] uppercase">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            this is a long blah blah about me and all the great things I have
            done and plan on doing and I hope to keep doing a;sdljkfs
            a;lsdkfjas;ldk a;lsdkf a;slkd a;dslkfj a;eiofje asd;lkfjp a;oiwj
            oiejl hello my name is jake and do ;asldkfja;lsdkfjasl;sdkfj a;lf
            ;aoiejre a;oidsjfen ;oiejewn pwoejnlas; ;alsdkfjaeijoweij ;alsdkj
            a;l poiej pwjenb p;aow8ei oaipshd p;iohje
            a;sdlkfjefjawoeifjaoiseifsafsa a;sdlkfj ;oie,s ;alkseoij ;aslijewoih
          </p>
          <p className="py-2 text-gray-600">
            another paragraph about me and the things that I like and the things
            that I have done and want to keep doing and all of that great stuff
            and things blah a;lfkjg a;sdlkfj p aowie fhwelknj oeisawweoi e
            paoewiawejp eopiahjjksh ah
          </p>
          <p className="py-2 text-gray-600">
            Check out some of my lates Projects!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl bg-[#b5bfc1] shadow-gray-400 rounded-3xl flext items-center justify-center p-4 hover:scale-110 ease-in duration-300">
          <Image
            className="w-full max-w-400 p-2 rounded-3xl bg-[#5b7379]"
            src="/../public/assets/profile-pic.png"
            width="200"
            height="400"
            alt="Pic of Me"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
