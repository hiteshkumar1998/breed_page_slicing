import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container, FormControl, Input } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { httpGet } from "../../../utils/http";
import Link from '@material-ui/core/Link';

class Newsletter extends Component {
  // state
  state = {
    homepage_bottom_left_banner: "",
    homepage_bottom_right_banner: "",
  };

  componentDidMount() {
    this.getHomePageLeftBannerById();
    this.getHomePageRightBannerById();
  }

  // declare home page left banner function
  getHomePageLeftBannerById = () => {
    const url = "http://breed-dev-back.vuwork.com:8082/getBannerById/";
    const BannerId = 7;
    httpGet(url, BannerId)
      .then((response) => {
        this.setState({
          homepage_bottom_left_banner: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

   // declare home page right banner function
   getHomePageRightBannerById = () => {
    const url = "http://breed-dev-back.vuwork.com:8082/getBannerById/";
    const BannerId = 1;
    httpGet(url, BannerId)
      .then((response) => {
        this.setState({
          homepage_bottom_right_banner: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    const {homepage_bottom_left_banner, homepage_bottom_right_banner} = this.state;
    return (
      <>
        <Box
          className="newsletter-section"
          paddingTop={this.props.width === "xs" ? "40px" : "120px"}
          paddingBottom={this.props.width === "xs" ? "40px" : "96px"}
        >
          <Container style={{ maxWidth: "1208px" }}>
            <Box>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                    <Link href={homepage_bottom_left_banner.link}>
                      <img
                          src={homepage_bottom_left_banner.image}
                          width="100%"
                          alt="banner-img"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Box>
                    <Link href={homepage_bottom_right_banner.link}>
                      <img
                          src={homepage_bottom_right_banner.image}
                          width="100%"
                          alt="banner-img"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              className="newsletter-section-parent-div"
              flexDirection={this.props.width === "xs" ? "column" : "row"}
            >
              <Box
                className="newsletter-section-child-1"
                width={this.props.width === "xs" ? "100%" : "520px"}
                marginBottom={this.props.width === "xs" ? "32px" : "0px"}
              >
                <Box
                  className="child-1-upper"
                  fontSize={this.props.width === "xs" ? "27px" : "50px"}
                >
                  Subscribe for newsletter
                </Box>
                <Box
                  className="child-1-middle"
                  fontSize={this.props.width === "xs" ? "13px" : "15px"}
                >
                  Want to Get Notified About New Arrivals?
                </Box>
                <Box
                  className="child-1-bottom"
                  fontSize={this.props.width === "xs" ? "13px" : "15px"}
                >
                  Sign-up for Alerts!
                </Box>
              </Box>
              <Box className="newsletter-section-child-2">
                <Box
                  className="child-1-grand-child"
                  flexDirection={this.props.width === "xs" ? "column" : "row"}
                >
                  <Box
                    className="grand-child-1"
                    width={this.props.width === "xs" ? "100%" : "50%"}
                    paddingLeft={this.props.width === "xs" ? "0px" : "16px"}
                    paddingRight={this.props.width === "xs" ? "0px" : "16px"}
                    marginBottom={this.props.width === "xs" ? "32px" : "0px"}
                  >
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel
                        htmlFor="my-input"
                        style={{
                          fontSize: "12px",
                          color: "rgba(0, 0, 0, 0.54)",
                        }}
                      >
                        Name
                      </InputLabel>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        style={{ paddingBottom: "17px" }}
                      />
                    </FormControl>
                  </Box>
                  <Box
                    className="grand-child-1"
                    width={this.props.width === "xs" ? "100%" : "50%"}
                    paddingLeft={this.props.width === "xs" ? "0px" : "16px"}
                    paddingRight={this.props.width === "xs" ? "0px" : "16px"}
                    marginBottom={this.props.width === "xs" ? "32px" : "0px"}
                  >
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel
                        htmlFor="my-input"
                        style={{
                          fontSize: "12px",
                          color: "rgba(0, 0, 0, 0.54)",
                        }}
                      >
                        Enter your email
                      </InputLabel>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        style={{ paddingBottom: "17px" }}
                      />
                    </FormControl>
                  </Box>
                  <Box
                    className="submit-newsletter-main"
                    width={this.props.width === "xs" ? "100px" : "45px"}
                    marginTop={this.props.width === "xs" ? "0px" : "26px"}
                  >
                    <Box className="submit-newsletter-child">
                      <Box className="submit-newsletter-grand-child">
                        <ArrowRightAltIcon />
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

export default withWidth()(Newsletter);
