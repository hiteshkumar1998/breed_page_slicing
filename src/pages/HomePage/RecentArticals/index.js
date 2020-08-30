import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";
import listingDogImage from "../../../images/denver-dog.png";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

var settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

class RecentArticals extends Component {

  slickNext = () => {
    this.slider.slickNext();
  };

  slickPrevious = () => {
    this.slider.slickPrev();
  };

  render() {
    return (
      <>
        <Box
          className="recent-articals-section"
          paddingTop={this.props.width === "xs" ? "80px" : "160px"}
        >
          <Container style={{ maxWidth: "1208px" }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Box width="100%" display="flex">
                  <Box
                    className="recent-articals-left-parent"
                    marginTop={this.props.width === "xs" ? "0px" : "-96px"}
                    marginBottom={this.props.width === "xs" ? "40px" : "0px"}
                  >
                    <Box
                      className="recent-articals-left-parent-text-1"
                      fontSize={this.props.width === "xs" ? "30px" : "50px"}
                    >
                      RecentArticals
                    </Box>
                    <Box
                      className="recent-articals-left-parent-text-2-parent"
                      width={this.props.width === "xs" ? "100%" : "335.2px"}
                    >
                      <strong style={{ fontWeight: "bold" }}>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs.
                      </strong>
                      <span style={{ fontSize: "15px", lineHeight: 2 }}>
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs.
                      </span>
                    </Box>
                    <Box
                      className="recent-articals-left-parent-text-3-parent"
                      justifyContent={
                        this.props.width === "xs" ? "center" : "left"
                      }
                    >
                      <Box style={{ cursor: "pointer", display: "flex" }}>
                        <strong>See All</strong>
                        <span style={{ marginLeft: "8px" }}>
                          <ArrowRightAltIcon />
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box className="recent-articals-right-main">
                  <Box
                    className="recent-articals-right-parent"
                    marginLeft={this.props.width === "xs" ? "0px" : "120px"}
                  >
                    <Box className="recent-articals-right-child">
                      <Box
                        className="recent-articals-right-child-upper-div"
                        flexDirection={
                          this.props.width === "xs" ? "column" : "row"
                        }
                        paddingTop={this.props.width === "xs" ? "80px" : "0px"}
                      >
                        <Box
                          className="recent-articals-right-child-upper-div-child-1"
                          display={this.props.width === "xs" ? "flex" : "unset"}
                          marginTop={
                            this.props.width === "xs" ? "0px" : "-152px"
                          }
                          marginLeft={
                            this.props.width === "xs" ? "0px" : "-52px"
                          }
                          marginRight={
                            this.props.width === "xs" ? "0px" : "32px"
                          }
                          paddingLeft={
                            this.props.width === "xs" ? "40px" : "0px"
                          }
                          paddingRight={
                            this.props.width === "xs" ? "40px" : "0px"
                          }
                          justifyContent={
                            this.props.width === "xs" ? "center" : "flex-start"
                          }
                        >
                          <img
                            src={listingDogImage}
                            alt="dog-img"
                            width={this.props.width === "xs" ? "100%" : "unset"}
                          />
                        </Box>
                        <Box className="recent-articals-right-child-upper-div-child-2">
                          <Slider {...settings} ref={(c) => (this.slider = c)}>
                            <Box
                              className="recent-artical-slider-parent"
                              justifyContent={
                                this.props.width === "xs"
                                  ? "center"
                                  : "flex-end"
                              }
                            >
                              <Box
                                className="recent-artical-slider-child"
                                padding={
                                  this.props.width === "xs" ? "40px" : "0px"
                                }
                              >
                                <Box className="recent-artical-slider-grand-child">
                                  <Box className="recent-artical-slider-grand-child-text-1">
                                    Feb, 20, 2020
                                  </Box>
                                  <Box className="recent-artical-slider-grand-child-text-3">
                                    Lorem ipsum, or lipsum as it is sometimes
                                    known, is dummy text
                                  </Box>
                                  <Box className="recent-artical-slider-grand-child-text-2">
                                    used in laying out print, graphic or digital
                                    creative designs.
                                  </Box>
                                  <Box className="recent-artical-slider-grand-child-text-2-parent">
                                    <Box className="recent-artical-slider-grand-child-text-2-parent-child">
                                      <strong style={{ fontWeight: "bold" }}>
                                        Read more
                                      </strong>
                                      <span style={{ marginLeft: "8px" }}>
                                        <ArrowRightAltIcon />
                                      </span>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="recent-artical-slider-parent"
                              justifyContent={
                                this.props.width === "xs"
                                  ? "center"
                                  : "flex-end"
                              }
                            >
                              <Box
                                className="recent-artical-slider-child"
                                padding={
                                  this.props.width === "xs" ? "40px" : "0px"
                                }
                              >
                                <Box className="recent-artical-slider-grand-child">
                                  <Box className="recent-artical-slider-grand-child-text-1">
                                    Feb, 20, 2020
                                  </Box>
                                  <Box className="recent-artical-slider-grand-child-text-3">
                                    Lorem ipsum, or lipsum as it is sometimes
                                    known, is dummy text
                                  </Box>
                                  <Box className="recent-artical-slider-grand-child-text-2">
                                    used in laying out print, graphic or digital
                                    creative designs.
                                  </Box>
                                  <Box className="recent-artical-slider-grand-child-text-2-parent">
                                    <Box className="recent-artical-slider-grand-child-text-2-parent-child">
                                      <strong style={{ fontWeight: "bold" }}>
                                        Read more
                                      </strong>
                                      <span style={{ marginLeft: "8px" }}>
                                        <ArrowRightAltIcon />
                                      </span>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              className="recent-artical-slider-parent"
                              justifyContent={
                                this.props.width === "xs"
                                  ? "center"
                                  : "flex-end"
                              }
                            >
                              <Box
                                className="recent-artical-slider-child"
                                padding={
                                  this.props.width === "xs" ? "40px" : "0px"
                                }
                              >
                                <Box className="recent-artical-slider-grand-child">
                                  <Box className="recent-artical-slider-grand-child-text-1">
                                    Feb, 20, 2020
                                  </Box>
                                  <Box className="recent-artical-slider-grand-child-text-3">
                                    Lorem ipsum, or lipsum as it is sometimes
                                    known, is dummy text
                                  </Box>
                                  <Box className="recent-artical-slider-grand-child-text-2">
                                    used in laying out print, graphic or digital
                                    creative designs.
                                  </Box>
                                  <Box className="recent-artical-slider-grand-child-text-2-parent">
                                    <Box className="recent-artical-slider-grand-child-text-2-parent-child">
                                      <strong style={{ fontWeight: "bold" }}>
                                        Read more
                                      </strong>
                                      <span style={{ marginLeft: "8px" }}>
                                        <ArrowRightAltIcon />
                                      </span>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Slider>
                        </Box>
                      </Box>
                      <Box className="slider-bottom-parent">
                        <Box className="slider-bottom-child">
                          <Box className="slider-bottom-grand-child">
                            <Box
                              className="slider-bottom-grand-child-left-div"
                              onClick={this.slickPrevious}
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
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    );
  }
}

export default withWidth()(RecentArticals);
