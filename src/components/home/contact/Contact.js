import React from "react";
import "./contact.css";
import Heading from "../../heading/Heading";
import {contactData} from "../../../assets/data"
import ContactItem from "./ContactItem";
const Contract = () => {
  return (
 <div className="contact-main">

<div className="contract-container custom-container">
      <Heading
        heading="Contact"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, necessitatibus!Lorem ipsum dolor sit amet."
      />
      <div className="row contact-main-container">
          {/* ///////       CONTACT LEFT     ////////*/}
        <div className="col-12 col-md-5 left pe-2 pe-lg-4 ">
          <div className="contact-box-container d-flex flex-wrap rounded-4 h-100 d-flex flex-column align-items-start">
            <h1 className="heading">Contact Info</h1>
            <div className="desc">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit..</div>
           <div className="contact-box-wrapper">
           {contactData.map((item, index) => (
             <ContactItem key={index} data={item}/>
            ))}
           </div>
          </div>
        </div>
          {/* ///////       ABOUT RIGHT     ////////*/}
        <div className="col-12 col-md-7 right mt-4 mt-md-0 ps-3 ps-lg-3 ">
          <form className="form d-flex flex-column contact-form h-100 flex-wrap rounded-4">
          <h1 className="heading text-dark mb-0">Get In Touch</h1>
            <p className="desc text-secondary mt-0">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
      
            <div className="d-flex flex-column flex-sm-row form-top-input-container w-100">
              <input
                type="text"
                className="contact-input form-control rounded-2 shadow-none"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="contact-input form-control rounded-2 shadow-none"
                placeholder="Your Email"
              />
            </div>
            <input
              type="text"
              className="contact-input form-control rounded-2 shadow-none"
              placeholder="Subject"
            />
            <textarea
              className="contact-input form-control rounded-2 shadow-none"
              placeholder="Message"
            />
            <button type="submit" className="contact-form-btn btn-blue ">Send Message</button>
          </form>
        </div>
      </div>
    </div>

 </div>
  );
};

export default Contract;
