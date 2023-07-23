import React from "react";
import HeroImage from "../../../assets/food/food5.jpeg";
const LoginPage = () => {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Login</h1>
      </div>
    </header>
  );
};

export default LoginPage;
