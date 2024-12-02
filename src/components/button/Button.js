import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
const Button = ({ btn_text, icon, btn_size, bg, pH = "34px", py = "10px" }) => {
  return (
    <Link
      className={`btn-blue custom-btn rounded-5 d-flex align-items-center btn-${btn_size} ${
        bg && "custom-btn-bg"
      }` }
      style={{ "--bg-color": bg, "--px": pH, "--py": py }}
    >
      {icon && icon}
      {btn_text}
    </Link>
  );
};

export default Button;
