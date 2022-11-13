import React from "react";
import LeadCard from "./Cards";
import "../component.css";
import InteractiveImage from "../assets/images/desktop/image-interactive.jpg"

const Interactive = () => {
  return (
    // Interactive image and Leader card wrapper
    <div
      className="
      lg:flex-row justify-center h-[30rem]  
    xl:w-[56%]
        "
    >
      <div
        className="w-full
        lg:relative lg:w-[50vw] ml-[-1.5rem] 
      xl:relative xl:left-[5rem] xl:w-full

      "
      >
        <img
          className="
       
        "
          src={InteractiveImage}
          alt=""
        />
      </div>
      {/* leader card wrapper */}
      <div
        className=" mt-[2rem]
      lg:absolute lg:left-[48%] lg:top-[40rem]
      xl:absolute xl:left-[46.5%] xl:top-[47rem]
      
      "
      >
        <LeadCard />
      </div>
    </div>
  );
};

export default Interactive;
