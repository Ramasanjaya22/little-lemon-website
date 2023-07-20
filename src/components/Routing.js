import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
};

export default Routing;
