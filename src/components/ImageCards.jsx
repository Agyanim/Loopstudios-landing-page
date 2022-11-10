import React from "react";
import { ImageCard } from "./Cards";
import cardDetails from "./CardDetails";
import "../component.css";


const ImageCardsDesktop = () => {
  const myCard = cardDetails;
  const imagePath = "/src/assets/images/desktop/";
  const cards = myCard.map((value, index) => {
    return (
      <ImageCard
        key={index}
        imageName={imagePath + myCard[index].imageName}
        prefix={myCard[index].prefix}
        title={myCard[index].title}
      />
    );
  });

  return (

    <section className="flex flex-wrap ">{cards}</section>


  )
};

export default ImageCardsDesktop;

export const ImageCardsMobile = () => {
  const myCard = cardDetails;
  const imagePath = "/src/assets/images/mobile/";
  const cards = myCard.map((value, index) => {
    return (
      <ImageCard
        key={index}
        imageName={imagePath + myCard[index].imageName}
        prefix={myCard[index].prefix}
        title={myCard[index].title}
      />
    );
  });

  return (

    <section className="flex flex-col">{cards}</section>


  )
};

