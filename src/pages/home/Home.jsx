/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./home.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import design1 from "../../assets/images/design1.png";
import { Fade } from "react-reveal";
import ReactPlayer from "react-player";
import video from "../../assets/images/Irah.mp4";
import Typewriter from "typewriter-effect";

const Home = () => {
  const videoRef = useRef(null);

  const handlePlayerReady = () => {
    const videoElement = videoRef.current?.getInternalPlayer();
    if (videoElement) {
      videoElement.play();
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current?.getInternalPlayer();

    const handleVideoEnded = () => {
      if (videoElement) {
        videoElement.seekTo(0);
        videoElement.play();
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  return (
    <>
      <section className="home-banner">
        <Fade>
          <div className="banner-wrapper">
            <Box className="hm-hero-bottom">
              <ReactPlayer
                className="video-wrapper"
                ref={videoRef}
                url={video}
                playing
                muted
                loop
                width="100%"
                height="100%"
                onReady={handlePlayerReady}
              />
              <div className="banner-content d-flex">
                <Typewriter
                  options={{
                    strings: [
                      "Welcome to the Technology",
                      "We build and create",
                      "Make life simple",
                      "It is really that easy for you, and for us",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </div>
            </Box>
            {/* <img src={banner} alt="banner" loading="lazy" /> */}
          </div>
        </Fade>
        <Box className="bg-theme tagline">
          <Container>
            <Box className="banner-text">
              <Grid container spacing={2} alignItems={"center"}>
                <Grid item sm={7}>
                  <Fade left>
                    <Box className="left-side">
                      <Typography variant="h1" component="h1">
                        Powerful IT <br /> Solutions With Irah
                      </Typography>
                    </Box>
                  </Fade>
                </Grid>
                <Grid item sm={5}>
                  <Fade right cascade>
                    <div className="right-side">
                      <Typography variant="h6" component="h3" mb={2}>
                        We make it easy.
                      </Typography>
                      <Typography>
                        We are a team of talented developers, programmers, and
                        everything your tech requires.
                      </Typography>
                    </div>
                  </Fade>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>
      <section className="about-section pt pb">
        <Container>
          <Fade up cascade>
            <div>
              <Typography component="h4" mb={2} color="#69E166">
                About us
              </Typography>
              <Typography variant="h6" component="p" color="#fff">
                A division of Irah Solution, we are an India based company
                providing digital communications, web and mobile solutions to
                clients. We provide state of the art application development
                solutions using the latest technologies. With Quality and User
                experience at the core of our way of working, our team of
                designers and developers work to make things simpler, faster,
                and better to use.
              </Typography>
              <Typography variant="h6" component="p" color="#fff" mt={4}>
                Our offering includes various engagement models so we can serve
                the purpose of the client business whether it be a start up
                which is currently in the vision and strategy stage or clients
                with an existing user base. We work on creating and upgrading
                B2B, B2C mobile, web applications as well websites, digital and
                social media communication as well as production.
              </Typography>
            </div>
          </Fade>
        </Container>
      </section>
      <section className="innovation-section bg-dark pt">
        <img src={design1} alt="img" loading="lazy" className="design1" />
        <Container>
          <Fade up cascade>
            <div className="section-title">
              <Typography component="h2" mb={2}>
                Welcome to Our World of{" "}
                <span className="text-theme">Innovation!</span>
              </Typography>
              <Typography>
                We are not just a product company; we are a team of dreamers,
                creators, and problem solvers who dare to push boundaries and
                challenge the status quo.
              </Typography>
            </div>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default Home;
