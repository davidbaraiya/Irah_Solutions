import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Typography,
} from "@mui/material";
import technologyBlogsData from "../../apis/blogData/technologyBlogsData";
import { Link, useParams } from "react-router-dom";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import mediaMarketingBlogsData from "../../apis/blogData/mediaMarketingBlogsData";

const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const matchSubData =
    technologyBlogsData.find((item) => item.id === id) ||
    mediaMarketingBlogsData.find((item) => item.id === id);

  return (
    <section className="blog-details-section pt pb">
      <Container>
        <div className="details-inner">
          <Button
            sx={{ color: "#333", marginBottom: "20px" }}
            className="back-btn"
          >
            <Link
              to="/blog"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <BsChevronLeft /> go to back
            </Link>
          </Button>
          <h3 className="heading">{matchSubData.heading}</h3>
          <strong>{matchSubData.title}</strong>
          <Typography mt={3} mb={4}>
            {matchSubData.description}
          </Typography>
        </div>
        {matchSubData.subData &&
          matchSubData.subData?.map(
            ({ subId, subTitle, list, subDescription }) => {
              return (
                <div key={subId} style={{ marginBottom: "30px" }}>
                  <h5 style={{ marginBottom: "10px" }}>{subTitle}</h5>
                  {subDescription && <p>{subDescription}</p>}
                  {list && (
                    <ol className="numbers">
                      {list.map((item, i) => (
                        <li key={i} style={{ margin: "20px 0 30px" }}>
                          <h6 style={{ marginBottom: "10px" }}>{item.name}</h6>
                          <p>{item.para}</p>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            }
          )}

        {matchSubData.faqs && (
          <div style={{ marginBottom: "40px" }}>
            <h5 style={{ marginBottom: "20px" }}>Faqs</h5>
            {matchSubData.faqs.map((item, i) => (
              <Accordion key={i} className="accordion">
                <AccordionSummary
                  expandIcon={<BsChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        )}
        {matchSubData.conclusion && (
          <div style={{ marginBottom: "30px" }}>
            <h5 style={{ marginBottom: "10px" }}>conclusion</h5>
            <Typography mb={2}>{matchSubData.conclusion}</Typography>
          </div>
        )}
      </Container>
    </section>
  );
};

export default BlogDetails;
