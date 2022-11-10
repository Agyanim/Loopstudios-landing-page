import React from "react";
import "../App.css";
import "../component.css";


const LeadCard = () => {
  return (
    <div className="bg-white  p-[1rem] m-4 text-center
    lg:w-[30rem] lg:p-10 lg:text-left
    xl:w-[40rem] xl:p-[4rem] 
    lg2:w-[36rem] lg2:p-[3rem]
    ">
      <h1 className="uppercase text-3xl mb-6
      lg:text-[3.5rem] lg:leading-[4rem] lg:mb-6 
      xl:text-7xl
      lg2:text-6xl
      
      
      ">The Leader In Interative VR</h1>
      <p className="text-sm xl:text-lg
      lg2:text-[1.05rem]
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
        className=" h-[10rem] m-[2rem] bg-no-repeat bg-cover  text-white 
        sm:w-[45rem] sm:h-72 sm:m-5  sm:pt-56 sm:pl-5 
       lg:h-[19rem] lg:w-[20.3%] lg:bg-cover 
       xl:h-[24rem] xl:bg-cover 
       lg2:w-[13.8rem]
        shadow-md hover:shadow-indigo-700/80 hover:scale-[1.1] transition-all duration-700"
        style={{
          backgroundImage: `url(${imageName})`,
        }}
      >
        <h2 className="uppercase pt-[6rem] pl-[1rem] 
        md:relative md:top-[-6.5rem] 
        lg:relative lg:top-[-6rem]  lg:left-[-1rem]  
        xl:relative xl:top-[-2rem] text-2xl
        ">
          {prefix} <br /> {title}
        </h2>
      </div>
    </>
  );
};
