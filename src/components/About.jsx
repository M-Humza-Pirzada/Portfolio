import React from "react";
import AboutProps from "./AboutProps";

const About = () => {
  const aboutData = [
    {
      id: 1,
      title: "Eduation & Training",
      desc: "I hold a Bachelor's degree in Information Technology (BSIT) and have completed professional training from multiple institutes, gaining expertise in web development and modern technologies. My education and training reflect my dedication to staying current in the tech industry.",
    },
    {
      id: 2,
      title: "Skills & Experties",
      desc: "I specialize in web development with expertise in JavaScript, Node.js, PHP, and Tailwind CSS. My skills include creating responsive UI designs, building CRUD applications, and developing custom frameworks. I am also experienced in database management, AJAX interactivity, and optimizing user experiences.",
    },
    {
      id: 3,
      title: "Professional Experience",
      desc: "I have experience in web development, creating dynamic applications using JavaScript, Node.js, PHP, and Tailwind CSS. I’ve worked on projects like UI clones, booking systems, and CRUD applications, ensuring quality and user-focused solutions.",
    },
    {
      id: 4,
      title: "Achievements",
      desc: `🌟 Successfully developed and deployed multiple web applications, including UI clones and booking systems. \n
      🌟 Recognized for creating a custom MVC framework without using Composer.\n
      🌟 Delivered impactful web development training sessions at Faith College of Information Technology.\n
      🌟 Streamlined technical support processes during my role as a Technical Support Engineer.`,
    },
    {
      id: 5,
      title: "Mission Statement",
      desc: `My mission is to create innovative and user-focused digital solutions that simplify lives and drive businesses forward. I aim to deliver high-quality, efficient, and scalable web applications while continuously improving my skills and staying ahead in the ever-evolving tech landscape.`,
    }
  ];
  return (
    <div>
      <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 space-y-4 text-justify  pb-2 md:pb-10 shadow-md">
      <div className="">
          <h1 className=" text-lg md:text-2xl">About</h1>
          <p className="font-light text-sm md:text-md">
            I’m a dedicated web developer with expertise in creating modern,
            responsive, and interactive websites. With hands-on experience in
            JavaScript, Node.js, Tailwind CSS, and PHP, I transform ideas into
            impactful digital solutions. My portfolio showcases projects ranging
            from UI clones to advanced web applications, all designed with
            precision and creativity. Let’s collaborate to bring your vision to
            life with innovative and efficient solutions!
          </p>
        </div>
        
        {aboutData.map(({ id, title, desc }) => (
          <AboutProps key={id} title={title} desc={desc} />
        ))}
      </div>
    </div>
  );
};

export default About;
