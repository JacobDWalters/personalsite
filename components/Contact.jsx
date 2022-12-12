import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiChevronDoubleUp } from "react-icons/hi";
import contact from "../public/assets/contact.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest  uppercase text-[#b5bfc1]">
          Contact
        </p>
        <h2 className="py-4 ">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <Image
                  className="w-[100%] rounded-xl"
                  src={contact}
                  alt="/"
                  width="800"
                  height="300"
                ></Image>
                <h2 className="py-2">Jacob Walters</h2>
                <p>Software Engineer</p>
                <p className="py-4">
                  Available for Contract Work or Full Time Positions, I would
                  love to hear from you!
                </p>
              </div>
              <p>Connect with Me</p>
              <div className="flex items-center justify-between py-4">
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
                  <div className="bg-[#b5bfc1] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>

                {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div> */}
              </div>
            </div>
          </div>

          {/*right*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 hover:scale-105 ease-in duration-300">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="bg-[#b5bfc1] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiChevronDoubleUp size={30} className="text-[#5b7379]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
