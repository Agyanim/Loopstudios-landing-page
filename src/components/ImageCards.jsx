import React from "react";
import { ImageCard } from "./Cards";
import cardDetails from "./CardDetails";
import { cardDetailsMobile } from "./CardDetails";

import "../component.css";

const ImageCardsDesktop = () => {
  const myCard = cardDetails;
  return (
    <section className="flex flex-wrap lg:gap-6 xl:gap-8">
      {myCard.map((images, i) => {
        return (
          <ImageCard
            key={i}
            imageName={Object.values(images.imageName)}
            prefix={images.prefix}
            title={images.title}
          />
        );
      })}
    </section>
  );
};

export default ImageCardsDesktop;

export const ImageCardsMobile = () => {
  const myCard = cardDetailsMobile;

  return (
    <section
      className="flex flex-col gap-9 sm:flex-row sm:flex-wrap lg:hidden 
    
    "
    >
      {myCard.map((images, i) => {
        
        return (
          <ImageCard
            key={i}
            imageName={Object.values(images.imageName)}
            prefix={images.prefix}
            title={images.title}
          />
        );
      })}
    </section>
  );
};
