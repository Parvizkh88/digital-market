import React from "react";
import Carousel from "react-multi-carousel";
import image1 from "../../asset/image/image1.jpg";
import image2 from "../../asset/image/image2.jpg";
import image3 from "../../asset/image/image3.jpg";
import image4 from "../../asset/image/image4.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Advertisement = () => {
  return (
    <div style={{ maxWidth: "500px" }} className="mx-auto my-2">
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <img src={image1} className="text-center d-flex mx-auto" />
        <img src={image2} className="text-center d-flex mx-auto" />
        <img src={image3} className="text-center d-flex mx-auto" />
        <img src={image4} className="text-center d-flex mx-auto" />
      </Carousel>
    </div>
  );
};

export default Advertisement;
