import React from "react";
import "./footer.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const navItems = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "our service",
      path: "/services",
    },
    {
      name: "our team",
      path: "/our_team",
    },
    {
      name: "career",
      path: "/career",
    },
  ];

  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={2} alignItems={"flex-end"}>
          <Grid item sm={4}>
            <Box className="left-side">
              <Typography
                component="div"
                sx={{ mb: 2 }}
                className="desk-logo-wrapper"
              >
                <Link to={"/"}>
                  <img src={logo} alt="logo" loading="lazy" />
                </Link>
              </Typography>
              <ul className="social-icons">
                <li>
                  <a href="#" target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item sm={8} sx={{ paddingLeft: { xs: "0 !important" } }}>
            <Box className="right-side">
              {navItems?.map(({ name, path }, i) => (
                <NavLink to={path} className="nav-link" key={i}>
                  <Button
                    sx={{
                      color: "#fff",
                      marginLeft: "12px",
                      padding: "4px 0 !important",
                    }}
                  >
                    {name}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Grid>
        </Grid>
        <hr />
      </Container>
    </footer>
  );
};

export default Footer;
