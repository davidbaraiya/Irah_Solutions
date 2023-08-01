import "./blog_card.css";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const BlogCard = ({ blogData, flexCoulum }) => {
  const { id, title, description, image } = blogData;

  return (
    <Box className="blog-card" flexDirection={flexCoulum ? "" : "row-reverse"}>
      <Fade up>
        <div className="img-wrapper">
          <img src={image} alt="img" loading="lazy" />
        </div>
      </Fade>
      <div className="blog-content">
        <Fade up>
          <Typography
            component={"h4"}
            className="blog-title"
            color="#6DEB6A"
            mb={2}
          >
            {title}
          </Typography>
        </Fade>
        <Fade up>
          <div className="para-div">
            <Typography component={"p"}>{description}</Typography>
            <Button className="readmore-btn btn" sx={{ marginTop: "15px" }}>
              <Link to={`/blog/blog_details/${id}`}>Read More</Link>
            </Button>
          </div>
        </Fade>
      </div>
    </Box>
  );
};

export default BlogCard;
