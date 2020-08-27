import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { getHomePage } from "../../../utils/http";

class Portfolio extends Component {
  //state
  state = {
    page_section: [],
    page_images: [],
  };

  componentDidMount() {
    getHomePage().then((res) =>
      this.setState({
        page_section: res.data.page_sections,
        page_images: res.data.page_images,
      })
    );
  }

  render() {
    const { page_section, page_images } = this.state;
    return (
      <>
        <Box
          className="portfolio-section"
          paddingBottom={this.props.width === "xs" ? "55px" : "332px"}
        >
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="plans-parent">
              <Box className="plans-child-div">
                <Box
                  className="plans-grand-child"
                  flexDirection={this.props.width === "xs" ? "column" : "row"}
                >
                  <Box
                    className="membership-plan-text"
                    fontSize={this.props.width === "xs" ? "30px" : "50px"}
                    width={this.props.width === "xs" ? "100%" : "331px"}
                  >
                    {page_section.length > 1 && page_section[2].name}
                  </Box>
                  <Box
                    className="membership-plan-description-text"
                    width={this.props.width === "xs" ? "100%" : "559.8px"}
                    marginLeft={this.props.width === "xs" ? "0px" : "48px"}
                  >
                    {Boolean(page_section.length) && (
                      <Box
                        style={{ maxHeight: "220px", overflow: "auto" }}
                        dangerouslySetInnerHTML={{
                          __html: page_section[2].content,
                        }}
                      />
                    )}
                    <Box>
                      <a href="google.com" style={{ textDecoration: "none" }}>
                        <Button
                          variant="contained"
                          type="button"
                          style={{
                            color: "#fff",
                            backgroundColor: "#3e2f46",
                            marginTop: "25px",
                          }}
                        >
                          View Plans
                        </Button>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className="portfolio-section-parent-div"
              flexDirection={this.props.width === "xs" ? "column" : "row"}
            >
              <Box
                className="portfolio-right-div"
                textAlign={this.props.width === "xs" ? "center" : "left"}
                marginRight={this.props.width === "xs" ? "0px" : "120px"}
              >
                <img
                  src={page_images.length > 1 && page_images[1].image}
                  alt="dr-dayna"
                  width={this.props.width === "xs" ? "100%" : "unset"}
                />
              </Box>
              <Box className="portfolio-left-div">
                <Box>
                  <Box className="upper-heading-text">
                    {page_section.length > 1 && page_section[3].name}
                  </Box>
                  {Boolean(page_section.length) && (
                    <Box
                      className="middle-description-text"
                      dangerouslySetInnerHTML={{
                        __html: page_section[3].content,
                      }}
                    />
                  )}
                  <Box style={{ display: "flex", marginBottom: "35px" }}>
                    <Box>
                      <strong>Read more</strong>
                    </Box>
                    <Box style={{ paddingLeft: "5px" }}>
                      <ArrowRightAltIcon />
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

export default withWidth()(Portfolio);
