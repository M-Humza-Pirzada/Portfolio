import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import r_v from "../assets/images/react_vite.png";
import t_css from "../assets/images/tailwindcss.jpg";
import php from "../assets/images/phplog.jpg";
import lrvl from "../assets/images/laravel.png";

const Experience = () => {
  const expData = [
    {
      id: 1,
      img: html,
    },
    {
      id: 2,
      img: css,
    },
    {
      id: 3,
      img: js,
    },
    {
      id: 4,
      img: r_v,
      
    },
    {
      id: 5,
      img: t_css,
      
    },
    {
      id: 6,
      img: php,
    },
    {
      id: 7,
      img: lrvl,
    }
  ];

  return (
    <>
      <div name="Exprience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 pb-20 shadow-md">
        <h1 className="md:text-2xl">Experience</h1>
        <p className="font-light text-sm mt-5">
          Developed and deployed a professional portfolio showcasing expertise
          in React, PHP, Laravel, and Tailwind CSS, highlighting projects and
          technical skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:justify-between lg:justify-between md:items-center md:text-center text-center md:content-center my-5 bg">
          {expData.map(({id, img }) => (
            <div className={`h-full border-2 md:mt-10 mt-10 p-4 rounded-lg shadow-lg flex justify-center items-center`} key={id}>
              <img
                className="h-56 w-56 md:h-52 mx-auto md:w-52 rounded-full "
                src={img}
                alt=""
              />
            </div>
          ))}

        
        </div>
      </div>
    </>
  );
};

export default Experience;
