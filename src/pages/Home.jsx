import React, { useState } from "react";
import Advertisement from "../components/home/Advertisement";
import Filters from "../components/home/Filters";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
        {Filters.filter((val) => {
          if (searchTerm == "") {
            return "";
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div key={key}>
              <p>{val.title}</p>
            </div>
          );
        })}
      </div>
      <Advertisement />
      <Filters />
    </div>
  );
};

export default Home;
