import React from "react";
import "./life_coaches.css";
import CommonBanner from "../../components/common-banner/CommonBanner";
import hero_img from "../../assets/images/service-hero.png";
import { Container, Grid, Typography } from "@mui/material";
import {
  PiTarget,
  PiFlaskFill,
  PiLinkedinLogo,
  PiMagnifyingGlassBold,
} from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { BiBookOpen } from "react-icons/bi";
import { Fade } from "react-reveal";

const processOutreach = [
  {
    id: 1,
    name: "Buyer Persona Mapping",
    icon: <PiTarget />,
  },
  {
    id: 2,
    name: "Prospecting",
    icon: <PiMagnifyingGlassBold />,
  },
  {
    id: 3,
    name: "Crafting Outreach Sequences",
    icon: <PiFlaskFill />,
  },
  {
    id: 4,
    name: "CMS and Workspace Setup",
    icon: <FiSettings />,
  },
  {
    id: 5,
    name: "LinkedIn Tracker Setup",
    icon: <PiLinkedinLogo />,
  },
  {
    id: 6,
    name: "Content Ideation",
    icon: <CiEdit />,
  },
  {
    id: 7,
    name: "Profile Branding",
    icon: <BsPerson />,
  },
  {
    id: 8,
    name: "Content Marketing",
    icon: <BiBookOpen />,
  },
];

const services = [
  "LinkedIn Content Development",
  "Creating Graphics for LinkedIn",
  "LinkedIn Profile Branding and Optimization",
  "Organic Lead Generation",
  "Connection Campaigns, CVS Campaigns, Group Campaigns",
  "Video Editing for your LinkedIn Profile",
  "Video Script Ideation",
  "Email Marketing (12000 emails per month)",
  "Event and Webinar Marketing",
  "Generating Awareness of Your Services",
  "Networking and Inviting Clients to Your Landing Page",
];

const heroDetail = {
  heroImg: hero_img,
  title: (
    <>
      Our LinkedIn <span className="text-theme"> Growth </span> Plan for life
      coaches
    </>
  ),
  description:
    " We work with life and business coaches and recognize the importance of entrepreneurs being able to find and utilise their services.",
  description2:
    " With high performing keywords and optimised content, we ensure that their services, their motive, their plan and their vision is rightly portrayed in every single content piece. We also ensure that every content is built keeping the algorithm of the platform in mind and the posting is done keep the timezone of your targeted audience.",
};

const LifeCoaches = () => {
  return (
    <div className="life-coaches-wrapper">
      <CommonBanner heroDetail={heroDetail} />
      <section className="pt pb bg-dark process-outreach">
        <Container>
          <h3 className="title">
            The process of outreach includes the following:
          </h3>
          <Grid container spacing={2}>
            {processOutreach?.map(({ id, name, icon }) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Fade up cascade>
                  <div className="outreach-card">
                    <div className="icon-wpr">{icon}</div>
                    <Typography>{name}</Typography>
                  </div>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section className="bg-dark pb">
        <Container>
          <h3 className="title">Services included in our package</h3>
          <Grid container spacing={2}>
            {services?.map((item, id) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={id}
                display={"flex"}
                width={"100%"}
              >
                <Fade up cascade>
                  <div className="outreach-card" style={{ width: "100%" }}>
                    <Typography>{item}</Typography>
                  </div>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default LifeCoaches;
