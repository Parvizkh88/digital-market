import { useState } from "react";
import Carousel from "react-multi-carousel";
import image1 from "../asset/image/image1.jpg";
import image2 from "../asset/image/image2.jpg";
import image3 from "../asset/image/image3.jpg";
import image4 from "../asset/image/image4.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
};
const Selector = ({ items, selectedIndex, handleSetIndex }) => {
  return (
    <div>
      <Carousel
        showDots={false}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {items.map((item, index) => {
          return (
            <div
              className={`d-flex ${
                selectedIndex === index
                  ? "bg-secondary text-light"
                  : "bg-light text-dark"
              }  p-2 m-2 
            border border-1 align-items-center 
            justify-content-center`}
              onClick={() => handleSetIndex(index)}
            >
              <p className="m-0">{item}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Selector;
