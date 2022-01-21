import { useState } from "react";
import Goods from "./Goods";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ItemShower = ({ items }) => {
  return (
    <div>
      <Carousel
        showDots={false}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {items.map((item) => (
          <Goods
            title={item.title}
            description={item.description}
            Image={item.Image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ItemShower;
