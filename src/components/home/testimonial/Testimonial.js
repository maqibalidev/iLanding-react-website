import React from "react";
import "./testimonial.css";
import Heading from "../../heading/Heading";
import TestimonialItem from "./TestimonialItem";
import CounterSec from "./CounterSec";
const Testimonial = () => {

  return (
    <div className="testimonial-container">
      <div className="custom-container ">
        <Heading
          heading="Testimonials"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, cumque."
        />

        <div className="testimonial-items d-flex flex-wrap flex-column flex-md-row">
          {[...Array(4)].map((_, key) => (
            <TestimonialItem key={key} />
          ))}
        </div>
      </div>
      
      
      <CounterSec />
    </div>
  );
};

export default Testimonial;
