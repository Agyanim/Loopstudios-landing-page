import React from "react";
import "../component.css";
import Facebook from "../assets/icon-facebook.svg"
import Instagram from "../assets/icon-instagram.svg"
import Pinterest from "../assets/icon-pinterest.svg"
import Twitter from "../assets//icon-twitter.svg"

const Footer = () => {
  return (
    <footer
      className="bg-black
    lg:mt-[5rem]
    "
    >
      <section
        className="flex flex-col text-center w-[full] 
        lg:flex-row lg:w-[90%] lg:m-auto items-center
      
      "
      >
        {/* footer heading and list wrapper */}
        <div
          className="lg:pt-[] lg:px-[1rem] lg:w-[40%]

"
        >
          <h1
            className="text-white text-3xl pb-3 pt-10
    
    "
          >
            loopstudios
          </h1>
          {/* Footer list  */}
          <ul
            className="flex flex-col text-center text-white h-[12rem]
            lg:flex-row justify-center lg:gap-5 lg:w-[90%] lg:h-[1.5rem] lg:mb-5
    "
          >
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Evants</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Supprt</a>
            </li>
          </ul>
        </div>
        {/* Social links  and copy right Container*/}

        <div
          className="py-[4rem] w-[15rem] m-auto
          lg:w-35% lg:mr-[0.5%]
          "
        >
          {/* social links wrapper */}
          <div
            className="flex pb-6 gap-[1rem] w-[8rem] ml-[3.5rem]
            lg:pl-[7.5rem] lg:w-full lg:p-2 lg:ml-[-1rem]
        
        "
          >
            <div className="shrink-0">
              <a href="#">
                <img 
                  src={Facebook}
                  alt="facebook"
                />
              </a>
            </div>

            <div className="shrink-0">
              <a href="#">
                <img
                  src={Twitter}
                  alt="twitter"
                />
              </a>
            </div>
            <div className="shrink-0">
              <a href="#">
                <img
                  src={Pinterest}
                  alt="pinterest"
                />
              </a>
            </div>
            <div className="shrink-0">
              <a href="#">
                <img
                  src={Instagram}
                  alt="instagram"
                />
              </a>
            </div>
          </div>

          {/* copy right section */}
          <p className="text-white text-[0.8rem] 
          lg:pt-3
          ">
            <span>&copy;</span>2021 loopstudios. All right reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
