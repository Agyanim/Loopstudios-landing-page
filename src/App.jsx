import React from "react";
import { HeaderMobile } from "./components/Header";
import { Button2 } from "./components/Button";
import ImageCardsDesktop, { ImageCardsMobile } from "./components/ImageCards";
import HeaderDesktop from "./components/Header";
import Interactive from "./components/Interactive";
import Footer from "./components/Footer";

function App() {
  return (
    <section>
      <div>
        <HeaderDesktop />
        <HeaderMobile />
      </div>
      <div
        className="w-[80vw] m-auto mt-[5rem]
        xl:w-[90%] xl:m-auto xl:mt-[8rem] xl:ml-[0.7rem]
      lg:mt-[4rem]
      "
      >
        <Interactive />
      </div>

      {/* Our creations container */}
      <div
        className="flex justify-center
      lg:justify-between lg:w-[80%] lg:m-auto lg:relative items-center lg:mt-[3rem]
      xl:top-[7rem]  xl:w-[76%]
        "
      >
        {/* our creation  */}
        <div>
        <h1
          className=" text-center text-4xl mt-[4rem] mb-8
          sm:mt-[16rem] sm:mb-8
          lg:text-3xl lg:ml-[-8%] lg:mt-5
          xl:ml-[-80%]
        "
        >
          OUR CREATIONS
        </h1>
        </div>

        {/* see all button wrapper */}
        <div
          className="hidden 
        lg:block xl:absolute xl:right-[-6.5vw]
        
        "
        >
          <Button2 />
        </div>
      </div>

      {/* Desktop view images container */}
      <div
        className="hidden 
        lg:flex lg:w-[85%] lg:m-auto 
        xl:w-[90%] xl:mt-[8rem] 
      "
      >
        <ImageCardsDesktop />
      </div>
      {/* Mobile view images container */}
      <div className=" lg:hidden sm: ">
        <ImageCardsMobile />
      </div>
      <div className="flex justify-center my-[2rem]
      lg:hidden
      ">
      <Button2 />

      </div>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;
