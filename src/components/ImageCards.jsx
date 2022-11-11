import React from "react";
import { ImageCard } from "./Cards";
import cardDetails from "./CardDetails";
import {cardDetailsMobile} from "./CardDetails";

import "../component.css";


const ImageCardsDesktop = () => {
  const myCard = cardDetails;
  const cards = myCard.map((value, index) => {
    const temp=myCard[index].imageName
    const image= Object.values(temp)
    return (
      <ImageCard
        key={index}
        imageName={image}
        prefix={myCard[index].prefix}
        title={myCard[index].title}
      />
      
    );
  });


  return (

    <section className="flex flex-wrap ">{cards}

    
    </section>
  )
};

export default ImageCardsDesktop;

export const ImageCardsMobile = () => {
  const myCard = cardDetailsMobile;
  const cards = myCard.map((value, index) => {
    const variable=myCard[index].imageName
    const image= Object.values(variable)
    console.log(image.at(0))
    return (
      <ImageCard
        key={index}
        imageName={image}
        prefix={myCard[index].prefix}
        title={myCard[index].title}
      />
      
    );
  });


  return (

    <section className="flex flex-col">{cards}</section>


  )
};

