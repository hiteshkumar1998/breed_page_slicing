import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Slider from "react-slick";
import { httpGet } from "../../../utils/http";

// slider control settings
var settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

class SliderTop extends Component {
  // states
  state = {
    slides: [],
  };

  componentDidMount() {
    this.getSliders();
  }

  // declare slider function
  getSliders = () => {
    const url = "http://breed-dev-back.vuwork.com:8082/sliders";
    httpGet(url)
      .then((response) => {
        this.setState({
          slides: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  render() {
    const { slides } = this.state;
    return (
      <>
        <Box className="banner-top-container">
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="banner-top">
              <Slider {...settings}>
                {slides.map((slide, index) => {
                  return (
                    <Box>
                      <img
                        src={slide.image}
                        alt="icon"
                        style={{ width: "100%", height: "600px" }}
                      />
                    </Box>
                  );
                })}
              </Slider>
            </Box>
          </Container>
        </Box>
      </>
    );
  }
}

export default withWidth()(SliderTop);
