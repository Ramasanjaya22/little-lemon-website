import React from "react";
import Person from "../../../assets/person.png";

const TestimonialCard = (props) => {
  const getStarRating = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <article className="testimonial-card">
      <img src={Person} alt="Person Icon"></img>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      {/* add the rating */}
      <p>{getStarRating(props.rating)}</p>
    </article>
  );
};

export default TestimonialCard;
