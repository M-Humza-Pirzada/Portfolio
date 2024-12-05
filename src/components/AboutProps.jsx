import React from "react";

const AboutProps = (props) => {
  let data = props;
//   console.log(data.title);
//   console.log(data.desc);

  return (
    <div>
      <div>
        <h1 className=" text-lg md:text-2xl text-green-600">{data.title}</h1>
        <p className="font-light text-sm md:text-md">
          {data.desc.split("\n").map((line, index) => (
             <span key={index}>
                {console.log(index)}
                {line}
             <br />
           </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AboutProps;
