import React from "react";
import Navigation from "./Navigation";
import DesktImage from '../assets/images/desktop/image-hero.jpg';
import MobiletImage from '../assets/images/mobile/image-hero.jpg';

const HeaderDesktop = () => {
  return (
    <div
      className=" hidden  bg-red-400 h-1/2 w-[100vw] pb-10 pt-10 bg-cover bg-no-repeat lg:block "
      style={{
        backgroundImage: `url(${DesktImage})`,
      }}
    >
      <div className="relative top-[-2rem]">
        <Navigation backg="transparent" />
      </div>

      <h1 className="box-border text-4xl leading-10 text-white uppercase p-2 mx-[4rem] my-20 border-2 w-72 h-46 ">
        Immersive Experiences That Deliver
      </h1>
    </div>
  );
};

export default HeaderDesktop;

export const HeaderMobile = () => {
  return (
    <div
      className="bg-red-400 h-1/2 w-[100vw] pb-10 pt-10 bg-cover bg-no-repeat  lg:hidden"
      style={{
        backgroundImage: `url(${MobiletImage})`,
      }}
    >
      <div className="relative top-[-2rem]">
        <Navigation backg="transparent" />
      </div>

      <h1 className="box-border text-4xl leading-10 text-white uppercase p-6 mx-10 my-20 border-2 w-72 h-46">
        Immersive Experiences That Deliver
      </h1>
    </div>
  );
};
