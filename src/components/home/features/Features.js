import React, { useState, useRef, useEffect } from "react";
import "./features.css";
import Heading from "../../heading/Heading";
import FeatureBottom from "./FeatureBottom";
import animGif from "../../../assets/images/animation.gif";
import { tabContent } from "../../../assets/data";

const Features = () => {
  const [activeTab, setActiveTab] = useState("Modisit");
  const [animationDirection, setAnimationDirection] = useState("left");
  const [buttonAnimation, setButtonAnimation] = useState("");
  const [activeIndicatorPos, setActiveIndicatorPos] = useState(0);

  const tabsRef = useRef(null);

  useEffect(() => {
    // Calculate active tab's position
    if (tabsRef.current) {
      const activeButton = tabsRef.current.querySelector(".tab-button.active");
      if (activeButton) {
        const { offsetLeft, offsetWidth } = activeButton;
        setActiveIndicatorPos({ left: offsetLeft, width: offsetWidth });
      }
    }
  }, [activeTab]);

  // Handle tab switch
  const handleTabSwitch = (tab) => {
    if (tab === activeTab) return;

    // Determine direction for content and buttons
    const newDirection = tabContent[tab] ? "left" : "right";
    setAnimationDirection(newDirection);
    setButtonAnimation(newDirection);

    setTimeout(() => {
      setActiveTab(tab);
      setButtonAnimation("");
    }, 300);
  };

  return (
    <div className="custom-container feature-container">
      <Heading
        heading={"Features"}
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <div className="tabs rounded-5" ref={tabsRef}>
        {/* Sliding blue indicator */}
        <div
          className="active-indicator"
          style={{
            left: `${activeIndicatorPos.left || 0}px`,
            width: `${activeIndicatorPos.width || 0}px`,
          }}
        ></div>

        {/* Tab Buttons */}
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`btn-blue tab-button ${
              activeTab === tab ? "active" : ""
            } ${buttonAnimation === "left" ? "animate-up" : ""} ${
              buttonAnimation === "right" ? "animate-down" : ""
            }`}
            onClick={() => handleTabSwitch(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="section-container d-flex flex-column flex-md-row">
        <div
          className={`content-section d-flex align-items-start w-100 animate-${animationDirection}`}
          key={activeTab}
        >
          <div className="text-content">
            <h2 className="heading">{tabContent[activeTab].title}</h2>
            <p className="desc">{tabContent[activeTab].description}</p>
            <ul>
              {tabContent[activeTab].points.map((point, index) => (
                <li key={index} className="small-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                 
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Illustration Section */}
        <div className="illustration">
          <img className="feature-loti-anim-img" src={animGif} alt="" />
        </div>
      </div>

      <FeatureBottom />
    </div>
  );
};

export default Features;
