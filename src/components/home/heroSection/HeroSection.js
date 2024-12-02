import React from "react";
import "./hero_section.css";
import { Link } from "react-router-dom";
import animGif from "../../../assets/images/animation.gif";
import Button from "../../button/Button";
import HeroBottomItem from "./HeroBottomItem";

const HeroSection = () => {
  return (
    <div className="hero-main">
      <div className="custom-container  hero-sec-container">
        <div className="hero-container flex-column flex-sm-row">
          <div className="left d-flex flex-column justify-content-center align-items-center align-items-sm-start">
            <Link className="btn-blue hero-top-btn  d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              Working for your success
            </Link>
            <h1 className="hero-heading mb-0 mt-3 text-center text-sm-start">
              Lorem ipsum dolorsitdsad amet{" "}
              <span className="heading-blue">consectetur</span>{" "}
            </h1>
            <p className="hero-desc small-text mt-4 mb-3 text-center text-sm-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, qui est saepe eum possimus alias!
            </p>
            <div className="hero-bottom-btn-sec mb-4 mb-md-0">
              <Button btn_text="Get Started" btn_size="medium" pH="35px" />
              <Button
                btn_text="Play Video"
                btn_size="medium"
                pH="10px"
                bg="transparent"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-play-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="right d-flex align-items-center flex-column flex-sm-row position-relative justify-content-center justify-content-sm-end ">
            <img className="loti-anim-img " src={animGif}  alt=""/>
            <div className="right-floating-sec rounded-2 shadow-sm  position-absolute  bottom-0">
              <div className="icons-container">
                <img
                  className="icon rounded-circle"
                  src="https://th.bing.com/th/id/R.36a637acd327c76357628dca25f838de?rik=KEv28AfFiyqYjA&pid=ImgRaw&r=0"
                  alt=""
                />
                <img
                  className="icon rounded-circle"
                  src="https://th.bing.com/th/id/R.36a637acd327c76357628dca25f838de?rik=KEv28AfFiyqYjA&pid=ImgRaw&r=0"
                  alt=""
                />
                <img
                  className="icon rounded-circle"
                  src="https://th.bing.com/th/id/R.36a637acd327c76357628dca25f838de?rik=KEv28AfFiyqYjA&pid=ImgRaw&r=0"
                  alt=""
                />
                <img
                  className="icon rounded-circle"
                  src="https://th.bing.com/th/id/R.36a637acd327c76357628dca25f838de?rik=KEv28AfFiyqYjA&pid=ImgRaw&r=0"
                  alt=""
                />
                <img
                  className="icon rounded-circle"
                  src="https://th.bing.com/th/id/R.36a637acd327c76357628dca25f838de?rik=KEv28AfFiyqYjA&pid=ImgRaw&r=0"
                  alt=""
                />
                <span className="icon rounded-circle d-inline-block x_small-text text-light fw-bold d-inline-flex align-items-center justify-content-center">
                  12+
                </span>
              </div>
              <p className="floating-sec-desc  mb-0 text-center mt-2">
                1200+ ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </div>
        <div className="hero-bottom w-100 rounded-4 row">
          <HeroBottomItem />
          <HeroBottomItem />
          <HeroBottomItem />
          <HeroBottomItem />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
