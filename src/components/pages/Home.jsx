import React from "react";
import Heading from "../sections/Homepages/Heading";
import Specials from "../sections/Homepages/Specials";
import About from "../sections/Homepages/About";
import Testimonials from "../sections/Homepages/Testimonials";

const Home = () => {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
};

export default Home;
