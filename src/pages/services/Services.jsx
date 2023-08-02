import React, { useEffect, useState } from "react";
import "./services.css";
import CommonBanner from "../../components/common-banner/CommonBanner";
import { Box, Container, Typography, Grid } from "@mui/material";
import icon1 from "../../assets/icons/web-dev.svg";
import icon2 from "../../assets/icons/app-dev.svg";
import circle_img from "../../assets/images/circle-img.png";
import ser_design1 from "../../assets/images/ser-design1.svg";
import ser_design2 from "../../assets/images/ser-design2.svg";
import ServiceCard from "../../components/service-card/ServiceCard";
import serviceData from "../../apis/serviceData";
import hero_img from "../../assets/images/service-hero.png";
import { Fade } from "react-reveal";

const serviceTech = [
  {
    id: 1,
    img: icon1,
    heading: "Technology",
    subtitle: "“Transforming Ideas into Playable Art”",
    list: [
      " Mobile application development",
      "web application development",
      "CRM & ERP solutions",
    ],
  },
  {
    id: 2,
    img: icon2,
    heading: "Media & marketing",
    subtitle: "“Revolutinizing the market industires”",
    list: [
      ,
      "Affiliate Marketing",
      "Digital Marketing",
      "Performance Marketing",
    ],
  },
];

const heroDetail = {
  heroImg: hero_img,
  title: (
    <>
      Welcome to Our <br /> World of
      <span className="text-theme"> Innovation!</span>
    </>
  ),
  description:
    " We are not just a product company; we are a team of dreamers, creators, and problem solvers who dare to push boundaries and  challenge the status quo. Our products are not just lines of  code, they are experiences that have the power to change the world.",
};

const Services = () => {
  const [isWebDevActive, setIsWebDevActive] = useState(false);
  const [isAppDevActive, setIsAppDevActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById("service-section");
      const serviceSectionRect = serviceSection.getBoundingClientRect();
      const isScrolledIntoView =
        serviceSectionRect.top <= window.innerHeight &&
        serviceSectionRect.bottom >= 0;

      setIsWebDevActive(isScrolledIntoView);
      setIsAppDevActive(isScrolledIntoView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <CommonBanner heroDetail={heroDetail} />
      <section className="service-provide pb bg-dark pt">
        <Container>
          <Box up cascade>
            <Typography variant="h6" style={{ fontStyle: "italic !important" }}>
              <Fade left cascade>
                We are not just a product company; we are a team of dreamers,
                creators, and problem solvers who dare to push boundaries and
                challenge the status quo.
              </Fade>
            </Typography>
          </Box>
        </Container>
      </section>
      <section className="service-section  bg-dark">
        <img src={ser_design1} alt="img" className="ser-design1" />
        <img src={ser_design2} alt="img" className="ser-design2" />
        <Container>
          <Fade>
            <Box className="icon-wrapper">
              <div className={`icon-box ${isWebDevActive ? "active" : ""}`}>
                <div className={`icon-box web-dev`}>
                  <img src={icon1} alt="icon" />
                </div>
              </div>
              <div className="img-box">
                <img src={circle_img} alt="img" />
              </div>
              <div className={`icon-box ${isWebDevActive ? "active" : ""}`}>
                <div className={`icon-box app-dev`}>
                  <img src={icon2} alt="icon" />
                </div>
              </div>
            </Box>
          </Fade>
          <Box className="service-details pt" id="service-section">
            {serviceTech?.map(({ id, heading, subtitle, img, list }) => (
              <Box key={id} className="pb">
                <Box
                  display="flex"
                  alignItems="flex-start"
                  sx={{
                    gap: { xs: 2, md: 5 },
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Fade left>
                    <div className="icon-box web-dev">
                      {/* <img src={img} alt="icon" /> */}
                    </div>
                  </Fade>
                  <div>
                    <Fade up>
                      <Typography component="h3" mb={2}>
                        {heading}
                      </Typography>
                      <Typography className="sub-title">{subtitle}</Typography>
                    </Fade>
                    <Fade up cascade>
                      <ul style={{ marginTop: "15px" }}>
                        {list?.map((list, i) => (
                          <li key={i}>{list}</li>
                        ))}
                      </ul>
                    </Fade>
                  </div>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </section>
      <section className="our-service bg-dark">
        <Container>
          <Box className="section-title text-center" mb={3}>
            <Fade>
              <Typography component={"h3"} color={"#69E166"} mb={2}>
                Our Services
              </Typography>
              <Typography component={"p"}>
                Insights into the Future of Technology
              </Typography>
            </Fade>
          </Box>
        </Container>
        <Box className="cards-wrapper">
          <Container>
            <Grid container spacing={2}>
              {serviceData?.map((services, i) => (
                <Grid item xs={6} sm={6} md={4} lg={4} key={i} className="col">
                  <Fade up>
                    <ServiceCard servicesData={services} />
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default Services;
