import React from "react";
import "../App.css";
import "../component.css";


const LeadCard = () => {
  return (
    <div className=" p-[1rem] text-center w-[80vw] mx-auto
    sm:w-[60vw] sm:mt-[4rem]
    lg:w-[49vw] lg:p-10 lg:text-left lg:bg-white
    xl:w-[50vw] xl:p-[3rem] 
    ">
      <h1 className="uppercase text-3xl mb-6 sm:text-4xl
      lg:text-[3.5rem] lg:leading-[4rem] lg:mb-6 
      xl:text-7xl
      lg2:text-6xl
      
      
      ">The Leader In Interative VR</h1>
      <p className="text-sm xl:text-lg
      sm:text-lg
      ">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe.
        Overaward-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  );
};
export default LeadCard;

export const ImageCard = ({ imageName, prefix, title }) => {
  return (
    <>
      <div
        className="  bg-no-repeat bg-cover  text-white w-[80vw] mx-auto h-[20.8vh]
      sm:w-[42vw] sm:h-[25vh] lg:w-[19.2vw] lg:bg-cover lg:h-[50vh] xl:w-[20vw] xl:h-[35vw] 1xl:w-[20vw] 1xl:h-[57vh]
        shadow-md hover:shadow-indigo-700/80 hover:scale-[1.1] transition-all duration-700"
        style={{
          backgroundImage: `url(${imageName})`,
        }}
      >
        <h1 className="uppercase mt-[3.5rem] pl-[1rem] text-lg
        sm:mt-[1rem]
        lg:mt-[18rem] lg:left-[-1rem]  
        xl:text-2xl xl:mt-[24rem]
        1xl:mt-[24rem]
        ">
          {prefix} <br /> {title}
        </h1>
      </div>
    </>
  );
};
