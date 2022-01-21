import React from "react";

const Goods = ({ title, description, Image }) => {
  return (
    <div className="my-3 align-items-center">
      <img src={Image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Goods;
