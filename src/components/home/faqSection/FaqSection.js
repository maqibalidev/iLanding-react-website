import React, { useState } from 'react'
import "./faq_section.css"
import { faqData } from '../../../assets/data';
import curlArrow from "../../../assets/images/curl-arrow.png"
import FaqItem from './FaqItem';
import ContactUs from './ContactUs';
const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const handleDetailClick = (index, event) => {
      event.preventDefault();
  
      if (openIndex === index) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
    };
  return (
    <div className='faq-main'>
    
    <div className="custom-container">
    <div className="row faq-section-container">
      {/* ///////       FAQ LEFT     ////////*/}
      <div className="col-12 col-sm-5 left">
        <h1 className=" faq-heading">
         Have a question? Check out the FAQ
        </h1>
        <p className="faq-desc"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dicta in tempora molestias, ullam saepe esse possimus expedita cum
          ipsa nesciunt. Delectus corrupti molestiae excepturi voluptate sint
          similique sequi dicta?
        </p>
        <img className='curl-arrow-img d-none d-sm-block' src={curlArrow} alt=""/>
      </div>
      {/* ///////       FAQ RIGHT     ////////*/}
      <div className="col-12 col-sm-7  right mt-4 mt-sm-0">
        {faqData.map((data, index) => (
      <FaqItem key={index} data={data} handleDetailClick={handleDetailClick} index={index} openIndex={openIndex}/>
        ))}
      </div>
    </div>


  </div>
 <ContactUs/>
    </div>
  )
}

export default FaqSection
