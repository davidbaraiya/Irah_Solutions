import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";
import companyLogo from "../../../assets/images/company-logo.png";

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="logo-slider pb bg-dark">
      <Container>
        <Slider {...settings}>
          {new Array(6).fill().map((logo, i) => {
            return (
              <div key={i} className="logo-wrapper">
                <img src={companyLogo} alt="Company Logo" loading="lazy" />
              </div>
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default LogoSlider;
