import React from "react";
import SpecialCard from "./SpecialCard";
import GreekSalad from "../../../assets/food/greek-salad.jpg";
import Bruschetta from "../../../assets/food/bruschetta.jpeg";
import LemonDessert from "../../../assets/food/lemon-dessert.jpg";
import { Carousel } from "react-responsive-carousel";
const Specials = () => {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This week's special offers</h1>
        <a
          className="action-button"
          href={require("../../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Online Menu
        </a>
      </article>

      <section className="specials-cards">
        <SpecialCard
          image={GreekSalad}
          name="Greek Salad"
          price="$12.99"
          description="A refreshing salad, made with tomato, lettuce, feta cheese, and olives.
Dressed with salt, hot pepper, and olive oil."
        />
        <SpecialCard
          image={Bruschetta}
          name="Bruschetta"
          price="$16.99"
          description="Toasted bread, topped with a delightful combination of tomatoes, prosciutto, and cheese. Seasoned with a touch of salt and drizzled with olive oil."
        />
        <SpecialCard
          image={LemonDessert}
          name="Lemon Dessert"
          price="$8.50"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
         and lemon zest."
        />
      </section>

      <section className="specials-carousel">
        <Carousel />
      </section>
    </section>
  );
};

export default Specials;
