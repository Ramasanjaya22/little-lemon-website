import React from "react";

const About = () => {
  return (
    <article className="about-us">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="about-subtext">
          Little Lemon was established in 1995 by Adrian and Mario, two Italian
          brothers. Despite the diverse culinary scene in Chicago, they noticed
          the absence of Mediterranean cuisine and were motivated to introduce
          the authentic flavors of their hometown in Italy to the city. Even
          after almost thirty years, the two brothers remain actively involved
          in managing and overseeing the operations of Little Lemon restaurant.
        </p>
      </section>

      <section className="double-image">
        <img
          className="about-1"
          src={require("../../../assets/food/food3.jpeg")}
          alt="Little Lemon restaurant cuisine 1"
        ></img>
        <img
          className="about-2"
          src={require("../../../assets/food/food2.jpeg")}
          alt="Little Lemon restaurant cuisine 2"
        ></img>
      </section>
    </article>
  );
};

export default About;
