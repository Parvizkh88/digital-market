import React from "react";
import Advertisement from "../components/home/Advertisement";
import Filters from "../components/home/Filters";

const Home = () => {
  return (
    <div className="container">
      <div
        className="input-group rounded mt-3 mb-3 mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <Advertisement />
      <Filters />
    </div>
  );
};

export default Home;
