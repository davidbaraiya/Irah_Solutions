import React from "react";
import { Fade } from "react-reveal";
import { Typography, Container } from "@mui/material";

const powersData = [
  {
    id: 1,
    title: "Prospecting and Enriching Database",
    description:
      "Create your ideal filter-based audience list and enrich your database with the right decision-makers.",
    top: true,
  },
  {
    id: 2,
    title: "Email Marketing",
    description:
      "Let your audience know through email campaigns designed by you.",
  },
  {
    id: 3,
    title: "SMS Marketing",
    description: "Reach out quickly for urgent and time-sensitive information.",
  },
  {
    id: 4,
    title: "Chat",
    description:
      "Communicate instantly with customers as they visit your site.",
  },
  {
    id: 5,
    title: "Shared Inbox",
    description:
      "Create a common inbox for your entire team for better organization.",
  },
  {
    id: 6,
    title: "Customer Relationship Management",
    description:
      "Build stronger relationships by storing and tracking all customer information on a single platform.",
  },
  {
    id: 7,
    title: "Automated Marketing",
    description:
      "Autopilot a major chunk of your activities to save time and improve performance.",
  },
  {
    id: 8,
    title: "Setup Emails",
    description:
      "Create your own email design, engagement, and deliverability conveniently.",
  },
  {
    id: 9,
    title: "Targeting and Segmentation",
    description:
      "Boost performance through the right targeting and segmentation of the audience.",
  },
  {
    id: 10,
    title: "Landing Pages",
    description:
      "Create a tailored visitor experience through specific landing pages for every campaign.",
  },
  {
    id: 11,
    title: "Signup Forms",
    description:
      "Enhance your contact database through forms integrated with your website.",
  },
  {
    id: 12,
    title: "Facebook Ads",
    description:
      "Launch ads to target previous and new customers through your accounts.",
  },
];

const Superpower = () => {
  return (
    <section className="irah-superpowers pt pb bg-dark">
      <Container>
        <Fade up cascade>
          <div className="section-title">
            <h3> IRAH's Superpowers</h3>
            <Typography>
              With IRAH, you can do it all. Choose one or more solutions from
              our list of services:
            </Typography>
          </div>
        </Fade>
        <ul className="lists">
          {powersData?.map(({ id, title, description }) => (
            <li key={id}>
              <Fade up cascade>
                <h6 style={{ color: "#69E166" }}>{title + ":"}</h6>
                <Typography>{description}</Typography>
              </Fade>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Superpower;
