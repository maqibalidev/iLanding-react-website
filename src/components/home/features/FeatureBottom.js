import React from "react";
import mobileImg from "../../../assets/images/mobile_image.png";
import { Link } from "react-router-dom";
import { about } from "../../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FeatureMiddleSecItem from "./FeatureMiddleSecItem";
import FeatureBoxItem from "./FeatureBoxItem";
import Button from "../../button/Button";
const FeatureBottom = () => {
  return (
    <>
      <div className="feature-bottom-sec">

        <FeatureBoxItem bg_color={'rgb(255, 246, 228)'} icon_color={"rgb(231, 189, 98)"}/>
        <FeatureBoxItem bg_color={'rgb(228, 243, 255)'} icon_color={"rgb(98, 160, 231)"}/>
        <FeatureBoxItem bg_color={'rgb(228, 253, 255)'} icon_color={"rgb(98, 231, 231)"}/>
        <FeatureBoxItem bg_color={'rgb(255, 228, 228)'} icon_color={"rgb(231, 98, 98)"}/>
      </div>

      <div className="feature-middle-container d-flex align-items-center flex-column flex-md-row">
        <div className="feature-middle-left d-flex flex-column my-3 my-md-0">
          {[...Array(3)].map((_, key) => (
            <FeatureMiddleSecItem key={key} align_right={true} />
          ))}
        </div>
        <div className="feature-middle-center d-flex justify-content-center">
          <img src={mobileImg} alt="" />
        </div>
        <div className="feature-middle-left w-100 d-flex flex-column my-3 my-md-0">
          {[...Array(3)].map((_, key) => (
            <FeatureMiddleSecItem key={key} />
          ))}
        </div>
      </div>

      <div className="feature-bottom-container d-flex justify-content-center rounded-4">
        <div className="feature-bottom-inner-sec d-flex flex-column align-items-center">
          <h1 className="heading text-center  text-light fw-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing{" "}
          </h1>
          <p className="desc text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            sunt id debitis hic sed excepturi sapiente numquam deleniti
            veritatis aliquid?
          </p>
          <Button btn_text="Call To Action" btn_size="medium"/>
        </div>
      </div>

      <div className="logos-container  d-flex flex-wrap custom-container justify-content-center align-items-center justify-content-md-between ">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={10}
          className="mySwiper"
          slidesPerView={3}
          breakpoints={{
            576: {
              slidesPerView: 5,
            },
            992: {
              slidesPerView: 6,
            },
          }}
        >
          {about.brands.map((data, index) => (
            <SwiperSlide key={index}>
              <Link className="logo-item d-flex justify-content-center w-100">
                <img src={data} alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FeatureBottom;
