import React from "react";
import AboutUs from "../../../assets/about-us.jpg";
const Heading = () => {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={AboutUs}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Meet Our Team</h1>
      </div>
    </header>
  );
};

export default Heading;
