import React from "react";
import { Fade } from "react-reveal";
import { Tabs, Tab, Typography, Box, Container, Button } from "@mui/material";

const features = [
  {
    id: 1,
    title: "Email and SMS Marketing",
    description:
      "Increase brand awareness and growth through industrialized email and SMS campaigns in a user-friendly interface.",
  },
  {
    id: 2,
    title: "Facebook Ads",
    description:
      "Run Facebook ads from IRAH’s all-in-one platform to expand audience reach and drive better results.",
  },
  {
    id: 3,
    title: "Template Editor",
    description:
      "Create professional-looking emails, automation workflows, and subscription forms with easily designed campaigns.",
  },
  {
    id: 4,
    title: "Sub-Account Management",
    description:
      "Centralize marketing activities of all your units in one single place.",
  },
  {
    id: 5,
    title: "Prospecting",
    description:
      "Ramp up your prospecting with instant access to millions of decision-makers from the right companies.",
  },
  {
    id: 6,
    title: "Enrichment",
    description: "Auto enrich your Salesforce with trusted data.",
  },
  {
    id: 7,
    title: "Landing Pages",
    description:
      "Create customizable and responsive landing pages to target leads more strategically.",
  },
  {
    id: 8,
    title: "Signup Forms",
    description:
      "Grow your contact list by converting website visitors into customers with visible and converting signup forms.",
  },
  {
    id: 9,
    title: "Email Insights",
    description:
      "Get deeper insights with performance metrics from all email campaigns.",
  },
  {
    id: 10,
    title: "Email API",
    description:
      "Blazing-fast delivery of all critical emails using supporting API.",
  },
  {
    id: 11,
    title: "Transaction Email",
    description:
      "Reliable sending of transactional emails directly to the inbox.",
  },
  {
    id: 12,
    title: "Live Chat",
    description:
      "Answer questions from customers in real-time with IRAH’s live chat feature.",
  },
  {
    id: 13,
    title: "Inbound Parsing",
    description:
      "Make email transactions two-way by integrating with the inbound parser.",
  },
  {
    id: 14,
    title: "Automation",
    description:
      "Raise your marketing performance with low effort through automation features.",
  },
  {
    id: 15,
    title: "Integrations and Plugins",
    description:
      "Quit switching tools and work from one place by connecting IRAH to all your tools and workflows.",
  },
];

const Features = () => {
  return (
    <section className="irah-features irah-superpowers pt pb bg-dark">
      <Container>
        <Fade up cascade>
          <div className="section-title">
            <h3>Features:</h3>
            <Typography>Campaign Management:</Typography>
          </div>
        </Fade>
        <ul className="lists">
          {features?.map(({ id, title, description }) => (
            <li key={id}>
              <Fade up cascade>
                <h6 style={{ color: "#69E166" }}>{title + ":"} </h6>
                <Typography>{description}</Typography>
              </Fade>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Features;
