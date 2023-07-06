import React from "react";
import CommonBanner from "../../components/common-banner/CommonBanner";
import { Box, Container, Typography } from "@mui/material";
import BlogCard from "../../components/Blog-card/BlogCard";
import blogData from "../../apis/blogData";

const Blogs = () => {
  return (
    <>
      <CommonBanner />
      <section className="blogs-section  bg-dark pt pb">
        <Container>
          <Box>
            <Typography
              component={"h3"}
              color={"#6DEB6A"}
              mb={5}
              textAlign="center"
            >
              Blog
            </Typography>
            <Box>
              {blogData?.map((blogData) => (
                <BlogCard key={blogData.id} blogData={blogData} />
              ))}
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
