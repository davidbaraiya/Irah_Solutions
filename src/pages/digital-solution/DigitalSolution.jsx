import React, { useEffect, useState } from "react";
import "./digital_solution.css";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Dialog,
} from "@mui/material";
import digitalData from "../../apis/digitalData";
import { Fade } from "react-reveal";
import CommonBanner from "../../components/common-banner/CommonBanner";
import hero_img from "../../assets/images/service-hero.png";
import { FaArrowRight } from "react-icons/fa";
import Superpower from "./components/Superpower";
import Features from "./components/Features";
import WhyIrah from "./components/WhyIrah";
import LogoSlider from "./components/LogoSlider";
import Testimonials from "./components/Testimonials";
import Form from "../../components/form/Form";

const heroDetail = {
  heroImg: hero_img,
  title: (
    <>
      Welcome to <span className="text-theme"> IRAH </span> - Empowering
      Businesses with
      <span className="text-theme"> Powerful </span> Digital Solutions Welcome
      to
    </>
  ),
  description:
    "At IRAH, we offer a comprehensive range of services to empower businesses in the digital era. Combining the expertise of a leading IT consultancy and software development company with innovative digital marketing solutions, we deliver transformative results that propel your business to new heights. From strategic IT consulting to custom software development, cloud computing, cybersecurity services, and digital marketing strategies, we have the expertise and experience to help your business thrive in today's competitive landscape.",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`digital-tabpanel-${index}`}
      aria-labelledby={`digital-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `digital-tab-${index}`,
    "aria-controls": `digital-tabpanel-${index}`,
  };
}

const DigitalSolution = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(
    window.innerWidth <= 767 ? true : false
  );
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth <= 767 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // handle Modal Open
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="digital-solution-wrapper">
      <CommonBanner heroDetail={heroDetail} />
      <section className="digital-tab">
        <Container>
          <Box
            className="digital-tab-inner"
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Tabs
              className="tab-links"
              orientation={screenSize ? "" : "vertical"}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile={screenSize}
              value={value}
              onChange={handleChange}
              sx={{ borderRight: 1, borderColor: "divider", maxHeight: 500 }}
            >
              {digitalData?.map(({ title, id }, i) => (
                <Tab label={title} {...a11yProps(i)} key={id} />
              ))}
            </Tabs>

            {digitalData?.map(({ discsription, id, service }, i) => (
              <TabPanel value={value} index={i} key={id}>
                <Fade up>
                  <Typography
                    variant="h6"
                    mb={4}
                    sx={{
                      fontWeight: "400 !important",
                      lineHeight: "1.4  !important",
                      color: "#69E166",
                    }}
                  >
                    {discsription}
                  </Typography>
                </Fade>
                <ul>
                  {service?.map((item, i) => (
                    <li style={{ marginBottom: "20px" }} key={i}>
                      <Fade up>
                        <Typography>
                          <span style={{ lineHeight: 1.7 }}>
                            <FaArrowRight color="#69E166" />
                          </span>
                          {item}
                        </Typography>
                      </Fade>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </Box>
        </Container>
      </section>
      <section className="products-info-section pt pb">
        <Container>
          <Fade up cascade>
            <div className="heading">
              <h2 style={{ color: "#69E166" }}>Product Information</h2>
              <Typography my={2}>
                Give your business a jump with more targeted and powerful
                marketing campaigns using IRAH’s all-in-one intelligent digital
                marketing solutions. Whether you are starting afresh or want to
                take your business a notch higher, IRAH’s indigenously built AI
                and Machine learning systems have got you covered. Choose from
                plans tailored to your requirements and leave the rest to her!
              </Typography>
              <Button className="btn" onClick={handleModalOpen}>
                Book a Free Demo
              </Button>
            </div>
          </Fade>
          <Dialog open={modalOpen} onClose={handleModalClose} className="demo">
            <div className="form-wrapper">
              <Form />
            </div>
          </Dialog>
        </Container>
      </section>
      <Superpower />
      <LogoSlider />
      <Box className="bg-theme tagline">
        <Container>
          <Box className="banner-text">
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item md={7}>
                <Fade left>
                  <Box className="left-side">
                    <Typography variant="h1" component="h1">
                      Tailor-Made Growth <br /> Strategy
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
              <Grid item md={5}>
                <Fade right cascade>
                  <div className="right-side">
                    <Typography>
                      Empower your teams with high-quality and more effective
                      marketing campaigns that guarantee success. Pinpoint the
                      right customer, automate workflows, enrich your entire
                      CRM, communicate effectively through multi-channel
                      campaigns, and interact meaningfully with customers.
                    </Typography>
                  </div>
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Testimonials />
      <WhyIrah />
      <Features />
      <section className="bottom-section pb bg-dark">
        <Container>
          <Box>
            <Fade>
              <h4>Solutions:</h4>
            </Fade>
            <Fade up cascade>
              <ul>
                <li>Enterprise Management and Infrastructure</li>
                <li>Enrichment</li>
                <li>Deliverability</li>
                <li>Customer Success</li>
                <li>Additional Services</li>
              </ul>
            </Fade>
          </Box>
          <Box mt={4}>
            <Fade>
              <h4> Contact Us :</h4>
            </Fade>
            <Fade up cascade>
              <Typography>
                Contact us today to embark on a transformative journey with IRAH
                Solutions - your trusted partner for powerful digital solutions.
                Let us help you unlock your business' true potential.
              </Typography>
            </Fade>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default DigitalSolution;
