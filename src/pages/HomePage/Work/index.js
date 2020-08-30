import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { getHomePage } from "../../../utils/http";
import heartIcon from "../../../images/heart-icon.png";
import receiptIcon from "../../../images/receipt-icon.png";
import injectionIcon from "../../../images/injection-icon.png";
import doctorIcon from "../../../images/doctor-icon.png";

class Work extends Component {
  //state
  state = {
    page_section: [],
  };

  componentDidMount() {
    getHomePage().then((res) =>
      this.setState({
        page_section: res.data.page_sections,
      })
    );
  }

  render() {
    const { page_section } = this.state;
    return (
      <>
        <Box className="works-section">
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="work-section-parent">
              <Box
                className="work-section-child"
                flexDirection={this.props.width === "xs" ? "column" : "row"}
              >
                <Box style={{ width: "100%" }}>
                  <Box
                    className="how-does-it-work-div"
                    textAlign={this.props.width === "xs" ? "center" : "left"}
                    width={this.props.width === "xs" ? "100%" : "355px"}
                  >
                    {Boolean(page_section.length) && (
                      <Box
                        className="how-does-it-work-text"
                        fontSize={this.props.width === "xs" ? "30px" : "50px"}
                        dangerouslySetInnerHTML={{
                          __html: page_section[1].name,
                        }}
                      />
                    )}
                    {Boolean(page_section.length) && (
                      <Box
                        className="how-does-it-work-description-text"
                        dangerouslySetInnerHTML={{
                          __html: page_section[1].content,
                        }}
                      />
                    )}
                    <Box
                      style={{ display: "flex", marginBottom: "110px" }}
                      justifyContent={
                        this.props.width === "xs" ? "center" : "flex-start"
                      }
                    >
                      <Box>
                        <strong>Learn more</strong>
                      </Box>
                      <Box style={{ paddingLeft: "5px" }}>
                        <ArrowRightAltIcon />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box style={{ display: "flex", width: "100%" }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Box className="right-section-div">
                          <Box className="right-section-child-div">
                            <Box>
                              <Box className="child-1">01</Box>
                              <img
                                src={heartIcon}
                                alt="heart-img"
                              />
                              <Box className="child-2">Lorem Ipsum</Box>
                              <Box className="child-3">
                                <Box className="parent">
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box className="right-section-div">
                          <Box className="right-section-child-div">
                            <Box>
                              <Box className="child-1">02</Box>
                              <img
                                src={receiptIcon}
                                alt="receipt-img"
                              />
                              <Box className="child-2">Lorem Ipsum</Box>
                              <Box className="child-3">
                                <Box className="parent">
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box className="right-section-div">
                          <Box className="right-section-child-div">
                            <Box>
                              <Box className="child-1">03</Box>
                              <img
                                src={injectionIcon}
                                alt="injection-img"
                              />
                              <Box className="child-2">Lorem Ipsum</Box>
                              <Box className="child-3">
                                <Box className="parent">
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box className="right-section-div">
                          <Box className="right-section-child-div">
                            <Box>
                              <Box className="child-1">04</Box>
                              <img
                                src={doctorIcon}
                                alt="profile-img"
                              />
                              <Box className="child-2">Lorem Ipsum</Box>
                              <Box className="child-3">
                                <Box className="parent">
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
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

export default withWidth()(Work);
