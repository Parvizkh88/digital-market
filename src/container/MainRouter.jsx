import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import Favorites from "../pages/Favorites";
import Discounts from "../pages/Discounts";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/discounts" element={<Discounts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
