import React from "react";
import php from "../assets/images/php.png";
import mongo from "../assets/images/mongo.png";
import tailwind from "../assets/images/tailwind.jpg";
import vite_react from "../assets/images/vite-react.png";

const PortfolioProject = () => {
  const protfolioData = [
    {
      id: 1,
      img: vite_react,
      techName: "React + Vite",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum recusandae sapiente deleniti reprehenderit adipisci!",
      btn: "Source Code",
      
    },
    {
      id: 2,
      img: tailwind,
      techName: "Tailwind",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum recusandae sapiente deleniti reprehenderit adipisci!",
      btn: "Source Code",

    },
    {
      id: 3,
      img: mongo,
      techName: "Mongo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum recusandae sapiente deleniti reprehenderit adipisci!",
      btn: "Source Code",

    },
    {
      id: 4,
      img: php,
      techName: "PHP",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum recusandae sapiente deleniti reprehenderit adipisci!",
      btn: "Source Code",

    },
  ];

 
  return (
    <>
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 pb-2 md:pb-4 shadow-md">
        <div className="space-y-4">
          <h1 className=" text-lg md:text-2xl">Portfolio</h1>
          <h1 className="underline">Projects</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:justify-between lg:justify-between md:items-center md:text-center text-center md:content-center my-5 ">
          {protfolioData.map(({id, img, techName, desc, btn }) => (
            <div className={`border-2 space-y-6 p-5 rounded-lg hover:scale-110 duration-300 shadow-lg shadow-slate-700`} key={id} >
              <img
                className="h-40 mx-auto w-40 rounded-full"
                src={img}
                alt=""
              />

              <div className="">
                <h2>{techName}</h2>
                <p className="font-light text-sm">
                  {desc}
                </p>
                <button className={`bg-slate-800 text-white text-lg px-8 py-4 rounded-lg mt-5`}>
                 {btn}
                </button>
              </div>
            </div>
          ))}

          {/* <div className="border-2 space-y-6 p-5 rounded-lg shadow-md shadow-blue-500  hover:scale-110 duration-300">
            <img 
                className="h-40 mx-auto w-40 rounded-full"
                src={tailwind} 
                alt="" />
            
            <div className="    ">
                <h2>Tailwind</h2>
                <p className="font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum recusandae sapiente deleniti reprehenderit adipisci!</p>
                <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-lg mt-5">
                    Source Code 
                </button>
            </div>
          </div>

          <div className="border-2 space-y-6 p-5 rounded-lg shadow-md shadow-green-500 hover:scale-110 duration-300">
            <img 
                className="h-40 mx-auto w-40 rounded-full"
                src={mongo} 
                alt="" />
            
            <div className="    ">
                <h2>Mongo</h2>
                <p className="font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum recusandae sapiente deleniti reprehenderit adipisci!</p>
                <button className="bg-green-600 text-white   text-lg px-8 py-4 rounded-lg mt-5">
                    Source Code 
                </button>
            </div>
          </div>

          <div className="border-2 space-y-6 p-5 rounded-lg shadow-md shadow-indigo-800 hover:scale-110 duration-300">
            <img 
                className="h-40 mx-auto w-40 rounded-full"
                src={php} 
                alt="" />
            
            <div className="    ">
                <h2>PHP</h2>
                <p className="font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum recusandae sapiente deleniti reprehenderit adipisci!</p>
                <button className="bg-indigo-800 text-white text-lg px-8 py-4 rounded-lg mt-5">
                    Source Code 
                </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PortfolioProject;
