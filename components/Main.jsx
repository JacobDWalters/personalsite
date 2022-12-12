import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ReactModal from "react-modal";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Helping People and Buisnesses Grow
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm
            <span className="text-[#5b7379]"> Jake</span>
          </h1>
          <h1 className="py-2 text-gray-700">What can I do for you?</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            The world is moving more towards technology and people are
            increasingly on the web. With that in mind, I deliver software with
            vast functionallity, high-quality user experience, elegant design
            and fast and secure data storage.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/jacob-d-walters/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#b5bfc1] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>

            <a
              href="https://github.com/JacobDWalters"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#b5bfc1] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:jacob.d.walters22@gmail.com">
              <div className=" bg-[#b5bfc1] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>

            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
              <ReactModal
                className="h-300 w-200
                 flex justify-center text-center bg-slate-600"
                isOpen={true}
                // onAfterOpen={handleModal}
                // onAfterClose={handleModal}
                closeTimeoutMS={500}
                style={{
                  overlay: {},
                  content: {},
                }}
              >
                <p>Phone Number: (616) 328-1653</p>
                <p>Email Address: jacob.d.waltres22@gmail.com</p>
              </ReactModal>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
