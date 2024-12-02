import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Button from "../../button/Button";

const Header = () => {
  const navItemsList = [
    { name: "Home", path: "/" ,active : true},
    { name: "About", path: "/" },
    { name: "Services", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Pricing", path: "/" },
    { name: "Team", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Dropdown", path: "/", dropdown: true },
    { name: "Contact", path: "/" },
  ]
  return (
    <div className="header  navbar navbar-expand-lg custom-container rounded-5">
      {/* ------HEADER LOGO------- */}
      <Link to="/" className="navbar-brand header-logo">
        iLanding
      </Link>

      {/* ------HEADER LINKS------- */}
      <div
        className="offcanvas offcanvas-end center sidebar"
        tabIndex="-1" // Fixed incorrect attribute case
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-body m-auto list-unstyled  sidebar-body d-flex flex-column my-auto align-items-center">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 px-4">
            {navItemsList.map((item, index) => (
              <li className="nav-item text-center" key={index}>
                <Link to="/" className={`nav-link  ${item.active && 'active'}`} aria-current="page">
                  {item.name}
                  {item.dropdown && (
                    <svg
                    className="ms-1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="8"
                      height="8"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 4.84375 12.90625 L 2.75 15 L 25 37.25 L 47.25 15 L 45.15625 12.90625 L 25 33.0625 Z"></path>
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------HEADER RIGHT BUTTON------- */}
      <div className="right d-flex ">
        
  <Button btn_size={'small'} btn_text={"Get Started"} pH="18px" py="10px"/>
        <button
          className="header-menu-btn d-flex  justify-content-center align-items-center   d-lg-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
