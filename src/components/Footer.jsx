import React from "react";
import "../component.css";
import Facebook from "../assets/icon-facebook.svg";
import Instagram from "../assets/icon-instagram.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Twitter from "../assets//icon-twitter.svg";

const Footer = () => {
  return (
    <div
      className="bg-black
    lg:mt-[5rem]
    "
    >
      <section
        className="flex flex-col  items-center  lg:flex-row lg:justify-between lg:w-[90vw] lg:mx-auto lg:h-[25vh] lg:px-2
      "
      >
        {/* footer heading and list wrapper */}
        <div
          className=" flex flex-col items-center 

"
        >
          <h1
            className="text-white text-3xl mt-16 lg:mt-0
    
    "
          >
            loopstudios
          </h1>
          {/* Footer list  */}
          <div className="lg:mt-4">
            <ul
              className="flex flex-col gap-6 text-white lg:flex-row 
            
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
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links  and copy right Container*/}
        <div
          className=" flex flex-col items-center my-20 lg:my-0
          "
        >
          {/* social links wrapper */}
          <div
            className="flex space-x-3
        "
          >
            <div className="shrink-0">
              <a href="#">
                <img src={Facebook} alt="facebook" />
              </a>
            </div>

            <div className="shrink-0">
              <a href="#">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>
            <div className="shrink-0">
              <a href="#">
                <img src={Pinterest} alt="pinterest" />
              </a>
            </div>
            <div className="shrink-0">
              <a href="#">
                <img src={Instagram} alt="instagram" />
              </a>
            </div>
          </div>

          {/* copy right section */}
          <p
            className="text-white text-lg mt-4
          "
          >
            <span>&copy;</span>2021 loopstudios. All right reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
