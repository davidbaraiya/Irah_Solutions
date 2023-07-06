import "./blog_card.css";
import React from "react";
import { Box, Typography } from "@mui/material";

const BlogCard = ({ blogData }) => {
  const { title, description, image } = blogData;
  return (
    <Box className="blog-card">
      <div className="img-wrapper">
        <img src={image} alt="img" loading="lazy" />
      </div>
      <div className="blog-content">
        <Typography component={"h3"} color="#6DEB6A" mb={2}>
          {title}
        </Typography>
        <div className="para-div">
          <Typography component={"p"}>{description}</Typography>
        </div>
      </div>
    </Box>
  );
};

export default BlogCard;
