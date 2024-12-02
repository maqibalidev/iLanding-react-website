import React from "react";
import "./pricing.css";
import Heading from "../../heading/Heading";

import PricingItem from "./PricingItem";
const Pricing = () => {
  return (
   <div className="pricing-main">
     <div className="custom-container pricing-container">
      <Heading
        heading="Pricing"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, ut."
      />
      <div className="pricing-items flex-wrap justify-content-center d-flex flex-column flex-md-row align-items-center">
       
          <PricingItem />
          <PricingItem isPopular={true}/>
          <PricingItem  />
      </div>
    </div>
   </div>
  );
};

export default Pricing;
