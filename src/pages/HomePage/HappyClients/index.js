import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { httpGet } from "../../../utils/http";
import quotesIcon from "../../../images/quotes.png";

var settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

class HappyClients extends Component {
  // states
  state = {
    testimonials: [],
  };

  componentDidMount() {
    this.getTestimonials();
  }

  // declare slider function
  getTestimonials = () => {
    const url = "http://breed-dev-back.vuwork.com:8082/testimonials";
    httpGet(url)
      .then((response) => {
        this.setState({
          testimonials: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  slickNext = () => {
    this.slider.slickNext();
  };

  slickPrevious = () => {
    this.slider.slickPrev();
  };
  render() {
    const { testimonials } = this.state;
    return (
      <>
        <Box className="clients-feedback-section">
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="clients-feedback-section-parent-div">
              <Box className="clients-feedback-section-child-div">
                <Box
                  className="child-main-div"
                  paddingLeft={this.props.width === "xs" ? "16px" : "80px"}
                  paddingRight={this.props.width === "xs" ? "16px" : "80px"}
                >
                  <Slider {...settings} ref={(c) => (this.slider = c)}>
                    {testimonials.map((testimonial, index) => {
                      return (
                        <Box>
                          <Box
                            className="clients-slide-1"
                            flexDirection={
                              this.props.width === "xs" ? "column" : "row"
                            }
                          >
                            <Box classname="slide-left-main-div">
                              <Box className="quotes-div">
                                <img
                                  src={quotesIcon}
                                  alt="quotes"
                                />
                              </Box>
                              <Box
                                style={{ fontSize: "50px", fontWeight: 600 }}
                              >
                                {testimonial.testimonial_title}
                              </Box>
                              <Box className="slide-left-desc-text">
                                {testimonial.testimonial_desc}
                              </Box>
                            </Box>
                            <Box className="slider-right-main-div">
                              <Box style={{ marginBottom: "40px" }}>
                                <img
                                  src={testimonial.customer_image}
                                  alt="img"
                                  style={{ maxHeight: "85px" }}
                                />
                              </Box>
                              <Box className="slide-right-desc-text">
                                {testimonial.customer_description}
                              </Box>
                              <strong style={{ fontSize: "20px" }}>
                                {testimonial.customer_name}
                              </strong>
                              <Box className="chief-executive-text">
                                {testimonial.customer_title}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </Slider>
                </Box>
                <Box className="slider-bottom-parent">
                  <Box className="slider-bottom-child">
                    <Box className="slider-bottom-grand-child">
                      <Box
                        className="slider-bottom-grand-child-left-div"
                        onClick={this.slickPrevious}
                        fontSize="large"
                      >
                        <ArrowBackIosIcon style={{ width: "100%" }} />
                      </Box>
                      <Box className="slider-bottom-grand-child-left-div">
                        <hr
                          style={{
                            height: "60%",
                            width: "1px",
                            background: "hsl(0 0% 0% / 0.12)",
                            border: "unset",
                          }}
                        />
                      </Box>
                      <Box
                        className="slider-bottom-grand-child-left-div"
                        onClick={this.slickNext}
                      >
                        <ArrowForwardIosIcon style={{ width: "100%" }} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </>
    );
  }
}

export default withWidth()(HappyClients);
