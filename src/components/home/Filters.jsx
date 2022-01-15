import React, { useState } from "react";
import Goods from "./Goods";
import Canon from "../../asset/image/Canon.jpg";

const Filters = () => {
  const [goods, setGoods] = useState([
    { id: 1, title: "Sony Alpha 7", description: "Uiv 4000 camera" },
    {
      id: 2,
      title: "Motterport pro 7",
      Image: Canon,
      description: "Uiv 3600 camera",
    },
    { id: 3, title: "Canon Eos 2000 d", description: "Uiv 2500 camera" },
    { id: 4, title: "Nikon Zfc", description: "Uiv 5000 camera" },
  ]);
  return (
    <div className="row my-3">
      {goods.map((item) => {
        return (
          <Goods
            title={item.title}
            description={item.description}
            Image={item.Image}
          />
        );
      })}
    </div>
  );
};

export default Filters;
