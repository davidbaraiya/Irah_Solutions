import React from "react";
import "./common_banner.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import img from "../../assets/images/service-hero.png";

const CommonBanner = () => {
  return (
    <section className="common-banner pt pb">
      <Container>
        <Grid
          container
          spacing={2}
          alignItems="center"
          flexDirection={{ xs: "column-reverse", sm: "row" }}
        >
          <Grid item sm={6}>
            <Box className="left-side">
              <Typography component="h2" mb={2}>
                Welcome to Our <br /> World of{" "}
                <span className="text-theme">Innovation!</span>
              </Typography>
              <Typography>
                We are not just a product company; we are a team of dreamers,
                creators, and problem solvers who dare to push boundaries and
                challenge the status quo. Our products are not just lines of
                code, they are experiences that have the power to change the
                world.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box className="right-side">
              <img src={img} alt="img" loading="lazy" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default CommonBanner;
