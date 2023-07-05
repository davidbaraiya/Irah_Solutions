import React from "react";
import "./services.css";
import CommonBanner from "../../components/common-banner/CommonBanner";
import { Box, Container, Typography } from "@mui/material";
import icon1 from "../../assets/icons/web-dev.svg";
import icon2 from "../../assets/icons/app-dev.svg";
import circle_img from "../../assets/images/circle-img.png";
const Services = () => {
  return (
    <>
      <CommonBanner />
      <section className="service-provide pb bg-dark pt">
        <Container>
          <Box>
            <Typography variant="h6">
              We are not just a product company; we are a team of dreamers,
              creators, and problem solvers who dare to push boundaries and
              challenge the status quo.
            </Typography>
          </Box>
        </Container>
      </section>
      <section className="service-section pt bg-dark">
        <Container>
          <Box className="icon-wrapper">
            <div className="icon-box">
              <img src={icon1} alt="icon" />
            </div>
            <div className="img-box">
              <img src={circle_img} alt="img" />
            </div>
            <div className="icon-box">
              <img src={icon2} alt="icon" />
            </div>
          </Box>
          <Box className="service-details pt">
            <Box display="flex" alignItems="center" gap={5}>
              <div className="icon-box">
                <img src={icon1} alt="icon" />
              </div>
              <Typography component="h4"> Software Development</Typography>
            </Box>
            <Typography>“Transforming Ideas into Playable Art”</Typography>
            <ul>
              <li>Multi-Gaming Platforms:</li>
              <li>Card Games:</li>
              <li>Casual Games:</li>
              <li>Fantasy Sports:</li>
            </ul>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Services;
