import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { httpGet } from "../../../utils/http";

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
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA8CAYAAADMtVzqAAAACXBIWXMAAAsSAAALEgHS3X78AAADMElEQVR4nO2a0Y0aMRBAJ6v8HxXERNr/XCoIHdxVEJMKQgfhKggdhK0g0AHpAL7jD7aDowIiR7MrB3YXj8deI2WehE46fLZ54x2PzcH5fE76+v353TT1GLFfQ3N+CwkwWk0BYAEAzwCwx593j9HKznMOAE9Gq49lVe8v5/zGWouF0WqGop4uunxfVvXxHoUZrSYoyc5bOW9VZVXPL9tHEYailgDwqadJ5+C5MVotcN4PPVO5CjRLGEZnBQDao/ndrDJ89FYXK6qLq0AXjEFtdI6esgAjmRUbYKPVBgB+esiyaMzHLWRhzqDfB5Zy3+CTXMJwVR078ustFu77JGFGq0fc9aiDNiz8msXFaLXEVUUJcMPcDbS3MIzQznMp97EYe5UZrdYA8I3RxYMbaC9hRqs5I0K9g6cEU8eekGOHaAN9UxjK+hHxs421yuzT8CFSX22gB4Vhzoopqxk8aeWPj2EsWQ3DwnA73UUe1HJI0GeL0cq3LqRwAoCNdTJ0ltxEyFkulS0Wu85nscCN6WvELmusHzdlVb/aX3QKw2041pK2opapq3zMi+tI3dU456v+roRh3uJsww2/bA0z4nFoHeGJOKGoVV+DrhXW25jAS1nVox2F8PAfWkw3HDDAgynjH2E4cN+Ngw8nHHTDnDwVbnC2OO/XWw0vVxh34FnKpN5FhCBvy6r2LnPasgLLCM7AX8aWhXBODge8PPTGrcM4A2+7dpTU4M7IyV1ej6GLKyy0+j5RoxQRzonhJeSJ+CsMS4nQW4gVNUoR4QQ5qBpoVtiM8RlilCGhhM57HRpkrrBtrtWFT0VooRqcbxthj4F/P3a95RI655qzmzfCQvNXTmFTjzZdsOZcYOEXQp0x2QMjjbBqRbvCQm8/cxSpLlnmXTByQW5hQddP3NNI8Be5/ytFrlzAgZF32dfjnH93esZaiMKurOoU3xP4MsHbZBLu3R5HWOgXDTmFqcDb5FZYwahncpJtzgXzq/9cZBUmiLB0iDAiIoyICCMiwoiIMCIijIgIIyLCiIgwIiKMiAgjIsKIiDAiIoyICCMiwoiIMCIijIgIIyLCiIgwIiKMAgD8Aat2zjyDzkYVAAAAAElFTkSuQmCC"
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
