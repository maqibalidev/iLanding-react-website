import React from "react";
import "./icon.css";
const Icon = ({ icon, rounded = true, small_icon = false }) => {
  return (
    <div
      className={`icon-container ${rounded ? "rounded-circle" : "rounded-2"} 
      d-flex align-items-center justify-content-center `}>
      {icon}
    </div>
  );
};

export default Icon;
