import React, { useEffect } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Last = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white bg-black relative h-2/4 p-8">
      <div data-aos="zoom-in-up" className="text-xl text-gray-500">
        made with 🖤 by
      </div>
      <div data-aos="zoom-in-up" className="text-4xl p-12">
        @akarshit.chauhan
      </div>
      <div
        data-aos="zoom-in-up"
        className="bg-blue-500 h-1 w-2/5 rounded-full shadow-[0_0px_25px_10px_rgba(0,0,0,0.3)] shadow-blue-900"
      ></div>
      <div data-aos="zoom-in-up" className="grid grid-cols-5 gap-16 p-16">
        <a href="https://github.com/akarshitchauhan" target="_blank" rel="noopener noreferrer">
          <FaGithub
            className="text-white hover:translate hover:scale-125 transform transition-all duration-200"
            size={30}
          />
        </a>
        <a href="https://www.instagram.com/akarshit.chauhan/" target="_blank" rel="noopener noreferrer">
          <FaInstagram
            className="text-white hover:translate hover:scale-125 transform transition-all duration-200"
            size={30}
          />
        </a>
        <a href="https://www.linkedin.com/in/akarshit-chauhan-03326622a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            className="text-white hover:translate hover:scale-125 transform transition-all duration-200"
            size={30}
          />
        </a>
        <a href="images/AkarshitChauhan.pdf" download target="_blank" rel="noopener noreferrer">
          <FaFileAlt
            className="text-white hover:translate hover:scale-125 transform transition-all duration-200"
            size={30}
          />
        </a>
        <a href="mailto:akarshit.chauhan2003@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope
            className="text-white hover:translate hover:scale-125 transform transition-all duration-200"
            size={30}
          />
        </a>
      </div>
    </div>
  );
};

export default Last;
