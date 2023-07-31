import React from "react";
import "./service_card.css";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ServiceCard = ({ servicesData }) => {
  const { img, desc } = servicesData;
  return (
    <Card sx={{ maxWidth: "100%", width: "100%" }} className="service-card">
      <CardMedia component="img" alt="img" image={img} />
      <CardContent>
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
