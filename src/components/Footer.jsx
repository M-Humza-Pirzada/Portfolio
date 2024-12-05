import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto shadow-md space-y-10 bg-slate-800 py-10 text-center ">
        <div className="flex flex-col space-y-8 mx-auto">
          <ul className="flex flex-row justify-center items-center space-x-4 text-white">
            <li className="text-2xl md:text-3xl">
              <ImLinkedin />
            </li>
            <li className="text-2xl md:text-3xl">
              <FaGithubSquare />
            </li>
            <li className="text-2xl md:text-3xl">
              <FaFacebookSquare />
            </li>
            <li className="text-2xl md:text-3xl">
              <FaSquareYoutube />
            </li>
          </ul>

          <div className="bg-slate-400 h-[1px] w-full sm:w-60 mx-auto mt-4">

          </div>

          <div className="text-white font-light md:text-sm">
            <p>
                &copy; 2024 Your Company All Right Reserved.
                <br />
                Supportive Partner ❤️ Humza.
            </p>
          </div>

          <div className="text-white font-light md:text-sm flex flex-row justify-center items-center gap-3">
            <div className="font-bold">Contact: </div>
            <div> +92 310 3905162</div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
