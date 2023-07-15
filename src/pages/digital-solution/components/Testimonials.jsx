import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { BsChatSquareQuote } from "react-icons/bs";
import { Fade } from "react-reveal";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials  pt bg-dark">
      <Container>
        <Fade up cascade>
          <div className="section-title">
            <h3>Testimonials:</h3>
          </div>
        </Fade>

        <div className="testimonials-slider">
          <Slider {...settings}>
            {new Array(6).fill().map((item, i) => {
              return (
                <Card
                  //   sx={{ maxWidth: 345 }}
                  className="testimonial-card"
                  key={i}
                >
                  <Fade up cascade>
                    <div className="quote-icon">
                      <BsChatSquareQuote />
                    </div>
                    <CardContent>
                      <Typography>
                        "Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book."
                      </Typography>
                    </CardContent>

                    <div className="bottom-div">
                      <Typography variant="h6" color="#69E166">
                        john Deo
                      </Typography>
                      <Typography>software engineer</Typography>
                    </div>
                  </Fade>
                </Card>
              );
            })}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
