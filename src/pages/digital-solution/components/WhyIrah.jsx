import React from "react";
import { Fade } from "react-reveal";
import { Tabs, Tab, Typography, Box, Container, Button } from "@mui/material";

const whyIrahData = [
  {
    id: 1,
    title: "Enterprise Management and Infrastructure",
    description:
      "In addition to campaign management, IRAH provides a platform to manage the needs of larger organizations.",
  },
  {
    id: 2,
    title: "Enrichment",
    description: "Accurate Salesforce data integrated with the CRM system.",
  },
  {
    id: 3,
    title: "Deliverability",
    description:
      "Fastest guaranteed deliverability of emails to boost campaign success rates.",
  },
  {
    id: 4,
    title: "Customer Success",
    description:
      "IRAH’s focus is your success. A dedicated account manager handles your queries and provides unlimited support.",
  },
  {
    id: 5,
    title: "Additional Services",
    description:
      "Value-added services to make your campaigns a success, including automated workflows, custom email templates, landing pages, and signup forms.",
  },
];

const WhyIrah = () => {
  return (
    <section className="irah-why-irah irah-superpowers pt bg-dark">
      <Container>
        <Fade up cascade>
          <div className="section-title">
            <h3> Why IRAH:</h3>
            <Typography>
              Explore our comprehensive solutions and features that make IRAH
              the top choice for businesses:
            </Typography>
          </div>
        </Fade>
        <ul className="lists">
          {whyIrahData?.map(({ id, title, description }) => (
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

export default WhyIrah;
