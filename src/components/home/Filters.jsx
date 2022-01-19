import { useState } from "react";
import Goods from "./Goods";
import Canon from "../../asset/image/Canon.jpg";
import Nikon from "../../asset/image/Nikon.jpg";
import Sony from "../../asset/image/Sony.jpg";
import Fujifilm from "../../asset/image/Fujifilm.jpg";

const Filters = () => {
  const [goods, setGoods] = useState([
    {
      id: 1,
      title: "Sony Alpha 7",
      Image: Sony,
      description: "Uiv 4000 camera",
    },
    {
      id: 2,
      title: "Fujifilm pro 7",
      Image: Fujifilm,
      description: "Uiv 3600 camera",
    },
    {
      id: 3,
      title: "Canon Eos 2000 d",
      Image: Canon,
      description: "Uiv 2500 camera",
    },
    { id: 4, title: "Nikon Zfc", Image: Nikon, description: "Uiv 5000 camera" },
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
