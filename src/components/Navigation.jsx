import React from "react";

const Navigation = ({backg}) => {
  return (
    <nav className="box-border flex justify-between p-4 m-4 bg-black " style={{backgroundColor:backg}}>
      <h1 className=" text-2xl  lg:font-bold md:text-4xl lg:text-4xl text-white lg:pl-[2rem]">loopstudio</h1>
      <div className="lg:hidden pt-3">
      <img src="src/assets/images/icon-hamburger.svg" alt="" srcset="" />
      </div>
      <div className="hidden lg:box-border lg:p-2 text-white lg:flex gap-6 pr-20 " >
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Evants</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
      </div>
    </nav>
  );
};

export default Navigation;
