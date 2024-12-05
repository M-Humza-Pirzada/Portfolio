import React, { useState } from "react";
import img from "../assets/images/profile.png";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Exprience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 container shadow-lg fixed top-0 left-0 right-0  z-50 bg-white ">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex space-x-4 items-center">
            <img src={img} alt="" className="h-12 w-12 rounded-full" />
            <h1 className="font-bold cursor-pointer">
              hp<span className="text-green-600 ">4</span>
              {/* <p className="text-sm">Developer</p> */}
            </h1>
          </div>

          {/* Desktop navbar */}

          <div>
            <ul className="hidden md:flex space-x-8 font-bold">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={70}
                    activeClass="active"
                     > {text} </Link>
                  
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : <IoMdMenu size={24} />}
            </div>
          </div>
          {/* End Desktop navbar */}
        </div>

        {/* Mobile view navbar */}
        {menu && (
          <div className="w-full">
            <ul className="md:hidden flex flex-col h-screen justify-center items-center space-y-4 text-lg bg-white bg-opacity-80 duration-300">
              {navItems.map(({ id, text }) => (
                
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-bold"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}

                    to={text}
                    smooth={true}
                    duration={500}
                    offset={70}
                    activeClass="active"
                     > {text} </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* End Mobile view navbar */}
      </div>
    </>
    // <div>
    //   <div className="w-full container mx-auto flex bg-gray-400 px-4 md:px-20 shadow-md">
    //     <div className="flex justify-between items-center h-16">

    //       <div className="flex space-x-2">
    //         <img src={img} alt="" className="h-12 w-12 rounded-full" />
    //         <h1>
    //           hp<span>4</span>
    //           <p>Developer</p>
    //         </h1>
    //       </div>

    //       <div>
    //         <ul className="flex space-x-8">
    //           <li>Home</li>
    //           <li>About</li>
    //           <li>Portfolio</li>
    //           <li>Experiecne</li>
    //           <li>Contact</li>
    //         </ul>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
