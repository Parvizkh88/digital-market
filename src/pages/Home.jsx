import React from "react";
import Advertisement from "../components/home/Advertisement";
import Filters from "../components/home/Filters";

const Home = () => {
  return (
    <div className="container">
      <Advertisement />
      <Filters />
    </div>
  );
};

export default Home;
