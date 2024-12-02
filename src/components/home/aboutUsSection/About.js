import React from "react";
import "./about.css";
import aboutImg from "../../../assets/images/abc.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="custom-container about-us-sec d-flex align-items-center flex-column-reverse flex-md-row">
      <div className="left">
        <h6 className="left-heading-1">MORE ABOUT US</h6>
        <h4 className="left-heading-2">Lorem ipsum dolor sit amet.</h4>
        <p className="left-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quidem
          enim, dolor vero at exercitationem doloribus, voluptatum fugit illum
          cum consectetur quam explicabo
        </p>
        <ul className="d-flex flex-wrap left-ul mt-2">
          {[...Array(6)].map((_, key) => (
            <li key={key} className="d-flex align-items-center">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                 
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
              </span>
              Lorem ipsum dolor sit
            </li>
          ))}
        </ul>

        <div className="left-bottom d-flex flex-wrap">
          <div className="about-left-profile d-flex align-items-center">
            <img
              height={80}
              className="rounded-circle profile-img"
              src="https://th.bing.com/th/id/R.36a637acd327c76357628dca25f838de?rik=KEv28AfFiyqYjA&pid=ImgRaw&r=0"
              alt=""
            />
            <div className="text-sec small-text ">
              <h5 className="profile-name">M Aqib Ali</h5>
              <span className="profile-desc">CEO & Founder</span>
            </div>
          </div>

          <Link
            to="tel:+92-3207043815"
            className="left-bottom-right d-flex align-items-center rounded-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <div className="text-sec">
              <h6 className=" mb-0 lh-1 d-block">Call us anytime</h6>
              <span className=" desc text-dark">+123 434 433</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="right d-flex justify-content-center justify-content-md-end">
        <div className="img-1 position-relative">
          <img src={aboutImg} alt="" />
          <div className="floating-box m-2 m-sm-3 m-md-4  rounded-3">
            <span className=" big-text text-light">15+ </span>
            <span className="floating-small-text text-light">
              Years <br /> of experience in business service
            </span>
          </div>
          <div className="img-2">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
