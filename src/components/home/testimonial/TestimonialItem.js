import React from "react";
import starIcon from "../../../assets/images/rating-icon.png";

const TestimonialItem = () => {
  return (
    <div className="slider-item rounded-1">
      {/* ////--------ITEM HEADER SECTION---------//// */}
      <div className="item-header d-flex">
        <img
          className="profile-img"
          src="https://th.bing.com/th/id/R.36a637acd327c76357628dca25f838de?rik=KEv28AfFiyqYjA&pid=ImgRaw&r=0"
          alt=""
        />
        <div className="d-flex flex-column item-header-right">
          <span className="profile-name small-text">M Aqib Ali</span>
          <span className="profile-profession">Developer</span>
          <span className="profile-rating">
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
          </span>
        </div>
      </div>
      {/* ////--------ITEM DESC SECTION---------//// */}
      <p className="profile-desc  fst-italic">
        <span className="me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-quote"
            viewBox="0 0 16 16"
          >
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
          </svg>
        </span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        voluptatem sunt accusantium vero voluptatum eos sunt accusantium vero
        voluptatum eos
        <span className="ms-2">
          <svg
            className="quote-right-icon"
            style={{ transform: "rotate(180deg)" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
          </svg>
        </span>
      </p>
    </div>
  );
};

export default TestimonialItem;
