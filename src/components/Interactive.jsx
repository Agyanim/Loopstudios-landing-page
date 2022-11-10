import React from "react";
import LeadCard from "./Cards";
import "../component.css";

const Interactive = () => {
  return (
    // Interactive image and Leader card wrapper
    <div
      className="lg:flex justify-center h-[30rem] w-[78%] m-auto mt-[4rem]
    xl:w-[56%]
        "
    >
      <div
        className="w-full
        lg:relative lg:w-[32rem] lg:left-[-20%]
      xl:relative xl:left-[-27%] xl:w-full
      lg2:left-[-8rem]

      "
      >
        <img
          className="
       
        "
          src="/src/assets/images/desktop/image-interactive.jpg"
          alt=""
          srcset=""
        />
      </div>
      {/* leader card wrapper */}
      <div
        className=" absolute 
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
