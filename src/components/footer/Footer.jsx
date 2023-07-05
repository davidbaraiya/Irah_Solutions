import React from "react";
import "./footer.css";
import { Box, Button, Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const navItems = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "our service",
      path: "/our_services",
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
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box className="left-side">
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
          <Grid item xs={8}>
            <Box
              className="right-side"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
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
