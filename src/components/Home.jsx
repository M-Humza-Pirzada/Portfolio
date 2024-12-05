import React from "react";
import img from "../assets/images/profile.png";

import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { TbBrandLaravel } from "react-icons/tb";
import { BsFiletypePhp } from "react-icons/bs";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Home = () => {
  let space = " ";
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 pb-2 md:pb-4 shadow-md">
        <div className="flex flex-col justify-center items-center md:flex-row mb-4">
          <div className="md:w-1/2 mt-5 space-y-2 order-2 md:order-1 md:px-10">
            <span className="text-lg md:2xl">Welcome In my Feed</span>
            <h1 className="text-lg md:text-3xl">
              Hello I'm a {space}
              {/* <span className="text-green-500"> Developer</span> */}
              <ReactTyped
                className="text-green-500"
                strings={["Developer", "Desinger", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </h1>

            <p className="text-xs md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              exercitationem est sed voluptatum unde? Culpa dolor recusandae,
              animi unde possimus ea accusantium architecto dolorem eaque.
              Eveniet vitae consectetur nemo magni.
            </p>

            <br />
            {/* Icon section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-x-0 ">
              <div className="space-y-2">
                <h1>Available on</h1>
                <ul className="flex space-x-3">
                  <li className="text-xl md:text-2xl">
                    <ImLinkedin />
                  </li>
                  <li className="text-xl md:text-2xl">
                    <FaGithubSquare />
                  </li>
                  <li className="text-xl md:text-2xl">
                    <FaFacebookSquare />
                  </li>
                  <li className="text-xl md:text-2xl">
                    <FaSquareYoutube />
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1>Currently working on</h1>
                <ul className="flex space-x-3 justify-center md:justify-end">
                  <li className="text-xl md:text-3xl">
                    <TbBrandLaravel />
                  </li>
                  <li className="text-xl md:text-3xl">
                    <BsFiletypePhp />
                  </li>
                  <li className="text-xl md:text-3xl">
                    <SiReact />
                  </li>
                  <li className="text-xl md:text-3xl">
                    <SiTailwindcss />
                  </li>
                </ul>
              </div>
            </div>
            {/* End Icon section */}
          </div>
          <div className="md:w-1/2 mt-8 mx-auto flex flex-row item-center  order-1 md:justify-center">
            <img
              className="rounded-full w-[400px] h-[400px] md:w-[400px] md:h-[400px] shadow-xl shadow-slate-700  "
              src={img}
              alt=""
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
