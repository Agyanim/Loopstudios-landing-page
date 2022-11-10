import React from "react";
import Header, { HeaderMobile } from "./components/Header";
import LeadCard, { ImageCard } from "./components/Cards";
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
        className="xl:w-[90%] xl:m-auto xl:mt-[8rem] xl:ml-[0.7rem]
      lg:mt-[4rem]
      "
      >
        <Interactive />
      </div>

      {/* Our creations container */}
      <div
        className="flex justify-center
      lg:justify-between lg:w-[80%] lg:m-auto lg:relative items-center lg:top-[-2rem]
      xl:top-[7rem]  xl:w-[76%]
        "
      >
        {/* our creation  */}
        <div>
        <h1
          className=" text-center text-4xl 
          lg:text-3xl lg:ml-[-8%]
          xl:ml-[-60%]
        "
        >
          OUR CREATIONS
        </h1>
        </div>

        {/* see all button wrapper */}
        <div
          className="hidden
        lg:block 
        
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
      <div className="flex-col lg:hidden ">
        <ImageCardsMobile />
      </div>
      <div className="flex justify-center mb-[2rem]
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
