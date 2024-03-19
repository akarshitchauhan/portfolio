import React, { useEffect } from "react";
import { FaAngleDown, FaGithub } from "react-icons/fa"; // Import FaGithub icon
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white bg-black relative h-screen p-8">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="absolute top-16"
      >
        <h1 className="text-4xl">Have a glimpse of my work experience</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="5000"
        className="ml-12 mt-12 grid grid-cols-4 gap-16"
      >
        <a
          href="https://github.com/akarshitchauhan/minor-project-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col justify-center items-center w-64 h-96 bg-black rounded-2xl hover:translate hover:scale-110 transform transition-all duration-200 shadow-[0_0px_15px_8px_rgba(0,0,0,0.3)] shadow-gray-700">
            <div className="w-52 h-52 bg-blue-500 mb-2 rounded-2xl">
              <img
                src="images/p1.png"
                alt="Photo"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="text-blue-500 text-xl">Bits & Bytes</div>
            <div className="text-white max-w-52 text-center text-sm">
              Developed a comprehensive Learning Management System using the
              MERN stack to facilitate efficient online education delivery and
              management.
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ravenclaw03/SustainDine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col justify-center items-center w-64 h-96 bg-black rounded-2xl hover:translate hover:scale-110 transform transition-all duration-200 shadow-[0_0px_15px_8px_rgba(0,0,0,0.3)] shadow-gray-700">
            <div className="w-52 h-52 bg-blue-500 mb-2 rounded-2xl">
              <img
                src="images/p2.png"
                alt="Photo"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="text-blue-500 text-xl">Sustain Dine</div>
            <div className="text-white max-w-52 text-center text-sm">
              Created a surplus food distribution app using MERN, enabling
              efficient allocation and delivery of excess food to those in need.
            </div>
          </div>
        </a>
        <a
          href="https://github.com/akarshitchauhan/Swiggy-Clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col justify-center items-center w-64 h-96 bg-black rounded-2xl hover:translate hover:scale-110 transform transition-all duration-200 shadow-[0_0px_15px_8px_rgba(0,0,0,0.3)] shadow-gray-700">
            <div className="w-52 h-52 bg-black mb-2 rounded-2xl">
              <img
                src="images/p3.png"
                alt="Photo"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="text-blue-500 text-xl">Swiggy Clone</div>
            <div className="text-white max-w-52 text-center text-sm">
              Crafted a Swiggy Clone frontend using React Native, enhancing user
              experience and providing seamless access to food delivery
              services.
            </div>
          </div>
        </a>
        <a href="https://github.com/akarshitchauhan/api-for-diabetes-model"
          target="_blank"
          rel="noopener noreferrer">
          <div className="flex flex-col justify-center items-center w-64 h-96 bg-black rounded-2xl hover:translate hover:scale-110 transform transition-all duration-200 shadow-[0_0px_15px_8px_rgba(0,0,0,0.3)] shadow-gray-700">
            <div className="w-52 h-52 bg-blue-500 mb-1 rounded-2xl">
              <img
                src="images/p4.png"
                alt="Photo"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="text-blue-500 text-lg">Diabetes Prediction</div>
            <div className="text-blue-500 text-lg">Model API</div>
            <div className="text-white max-w-52 text-center text-sm">
              Engineered a Diabetes Prediction model API using Python and Flask,
              offering accurate predictions for diabetes risk.
            </div>
          </div>
        </a>
      </div>
      <div className="absolute left-0 font-bold text-6xl text-blue-500 transform -rotate-90">
        <h1>Projects</h1>
      </div>
      <a
        href="https://github.com/akarshitchauhan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="absolute top-12 right-4 bg-blue-500 text-white max-w-60 shadow-[0_0px_25px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_25px_15px_rgba(0,0,0,0.3)] shadow-blue-900 hover:shadow-blue-900 rounded-3xl p-3 font-bold text-lg flex items-center transform"
        >
          <FaGithub className="text-white mr-3" /> {/* GitHub icon */}
          <h1>Do check my GitHub</h1>
        </div>
      </a>
      <div className="absolute left-1/2 bottom-8 text-gray-500">
        <FaAngleDown className="text-gray-500 inline-block text-3xl ml-2 animate-bounce" />
      </div>
    </div>
  );
};

export default Projects;
