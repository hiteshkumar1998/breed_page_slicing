import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { getHomePage, httpGet } from "../../../utils/http";
import { withRouter } from "react-router";

class RecentListing extends Component {
  //state
  state = {
    is_tab_breed: true,
    page_section: [],
    dogs: []
  };

  componentDidMount() {
    getHomePage().then((res) =>
      this.setState({
        page_section: res.data.page_sections,
      })
    );
    this.getDogs(0);
  }
  //route change function
  routeChange = (path) => {
    this.props.history.push(path);
  };

  // declare dogs get function
  getDogs = (is_for_sale) => {
    const url =
      "http://breed-dev-back.vuwork.com:8082/recentlistings?dog=1&is_for_sale=" +
      is_for_sale +
      "&limit=9";

    httpGet(url)
      .then((response) => {
        this.setState({
          dogs: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  //recent listing breed tab open function
  openBreedTab = () => {
    this.setState({ is_tab_breed: true });
  };

  //recent listing breed tab close function
  closeBreedTab = () => {
    this.setState({ is_tab_breed: false });
  };
  render() {
    //define constants
    const { page_section, dogs } = this.state;
    return (
      <>
        <Box className="recent-listing-section">
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="recent-listing-main">
              <Box className="recent-listing-text">Recent listings</Box>
              <Box className="recent-listing-child-text">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy
                textused in <br /> laying out print, graphic or digital creative
                designs.
              </Box>
              <Box className="breed-or-adoption-text-main">
                <Box className="breed-or-adoption-text-main-child">
                  <Box
                    className="breed-worthy-text"
                    onClick={() => {
                      this.openBreedTab();
                      this.getDogs(0);
                    }}
                  >
                    Breed worthy dogs
                  </Box>
                  <Box
                    className="adoption-text"
                    onClick={() => {
                      this.closeBreedTab();
                      this.getDogs(1);
                    }}
                  >
                    Up for adoption
                  </Box>
                </Box>
              </Box>
              <Box className="tab-main">
                <Box className="tab-main-child">
                  <Box
                    className="tab-main-grand-child"
                    left={this.state.is_tab_breed === true ? "32px" : "unset"}
                    right={this.state.is_tab_breed === true ? "unset" : "32px"}
                  >
                    <hr
                      style={{
                        height: "7px",
                        width: "192px",
                        borderRadius: "5px",
                        backgroundColor: "rgb(219, 94, 30)",
                      }}
                    />
                  </Box>
                  <hr className="text-underline-div" />
                </Box>
              </Box>
            </Box>

            <Box className="dogs-section">
              <Grid container spacing={3}>
                {dogs.map((dog, index) => {
                  return (
                    <Grid item xs={12} sm={4}>
                      <Box height="100%">
                        <Box className="dog-box-child">
                          <Box style={{ width: "100%" }}>
                            <img
                              src={dog.main_image}
                              alt="header-logo"
                              style={{ width: "100%", height: "100%" }}
                            />
                          </Box>
                          <Box className="dog-info-main">
                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box>
                                <strong>{dog.breed_name}</strong>
                              </Box>
                              <Box
                                style={{
                                  display: "flex",
                                  fontSize: "15px",
                                  fontWeight: 600,
                                }}
                              >
                                <Box style={{ paddingRight: "5px" }}>
                                  <FavoriteBorderIcon />
                                </Box>
                                <Box>{dog.likes} Likes</Box>
                              </Box>
                            </Box>
                            <Box marginBottom="40px" color="rgb(124, 124, 124)">
                              {dog.city && (
                                <span style={{ fontWeight: "400" }}>
                                  {dog.city}
                                </span>
                              )}
                              {dog.state && <strong>, {dog.state}</strong>}
                            </Box>
                            <Box
                              style={{
                                marginTop: "40px",
                                marginBottom: "30px",
                              }}
                            >
                              {dog.description}
                            </Box>
                            <Box
                              style={{
                                marginBottom: "45px",
                                display: "flex",
                                color: "darkorange",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                this.routeChange("/dog-detail?id=" + dog.id)
                              }
                            >
                              <Box>
                                <strong>Read More</strong>
                              </Box>
                              <Box style={{ paddingLeft: "5px" }}>
                                <ArrowRightAltIcon />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Box className="see-more-btn-seaction">
              <a href="google.com" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  type="button"
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    color: "#fff",
                    backgroundColor: "#db5e1e",
                    textTransform: "none",
                  }}
                >
                  See More
                </Button>
              </a>
            </Box>
            <Box className="divider">
              <hr
                style={{
                  height: "1px",
                  width: "95%",
                  backgroundColor: "rgb(224, 219, 213)",
                }}
              ></hr>
            </Box>
            <Box className="best-in-breed-section">
              <Box>
                {Boolean(page_section.length) && (
                  <Box
                    className="best-in-breed-heading-text"
                    fontSize={this.props.width === "xs" ? "30px" : "50px"}
                    dangerouslySetInnerHTML={{
                      __html: page_section[0].name,
                    }}
                  />
                )}
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  {Boolean(page_section.length) && (
                    <Box
                      className="best-in-breed-description-text"
                      width={this.props.width === "xs" ? "100%" : "805px"}
                      dangerouslySetInnerHTML={{
                        __html: page_section[0].content,
                      }}
                    />
                  )}
                </Box>
                <Box className="best-in-breed-read-more-text">
                  <Box>
                    <strong>Read More</strong>
                  </Box>
                  <Box style={{ paddingLeft: "5px" }}>
                    <ArrowRightAltIcon />
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

export default withWidth()(withRouter(RecentListing));
