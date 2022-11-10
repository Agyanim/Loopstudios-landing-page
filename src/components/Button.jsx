import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai ";

const Button = () => {
  return (
    <>
      <button className="bg-blue-500 px-6 py-2 m-4 text-white font-bold rounded-md hover:bg-blue-700">
        Submit
      </button>
      <div>
        <AiOutlineArrowDown />
      </div>
    </>
  );
};


export const Button2 = () => {
  return (  <>    
  <button className="py-[0.5rem] px-[3rem] border-black border-[1px] ">
        SEE ALL
      </button>
    </>
  );
};
export default Button;
