import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container, FormControl, Input } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { httpGet, httpPost } from "../../../utils/http";
import Link from "@material-ui/core/Link";
import { withSnackbar } from "notistack";
import CloseIcon from "@material-ui/icons/Close";

class Newsletter extends Component {
  // state
  state = {
    homepage_bottom_left_banner: "",
    homepage_bottom_right_banner: "",
    name: "",
    email: "",
    name_error: "",
    email_error: "",
  };

  componentDidMount() {
    this.getHomePageLeftBannerById();
    this.getHomePageRightBannerById();
  }

  //sets field data in local state
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //email format
  email_reg_expression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //checks form validation
  validate = () => {
    this.setState({
      name_error: "",
      email_error: "",
    });

    //defin error = false
    let error = false;

    if (this.state.name === "") {
      this.setState({ name_error: "Name is required" });
      error = true;
    }
    if (this.state.name !== "" && this.state.name.length < 5) {
      this.setState({
        name_error: "Name should be greater than 5 characters",
      });
      error = true;
    }
    if (this.state.email === "") {
      this.setState({ email_error: "Email is required" });
      error = true;
    }
    if (
      this.state.email !== "" &&
      !this.email_reg_expression.test(this.state.email)
    ) {
      this.setState({ email_error: "Email is invalid" });
      error = true;
    }

    if (error) {
      return false;
    }
    return true;
  };

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

  // toast message delete function
  action = (key) => (
    <Box
      onClick={() => {
        this.props.closeSnackbar(key);
      }}
      fontSize="large"
    >
      <CloseIcon />
    </Box>
  );

  //insert record
  onSubmit = (e) => {
    e.preventDefault();
    const newsletterData = {
      name: this.state.name,
      email: this.state.email,
    };

    const isValid = this.validate();

    //checks newsletter data is valid or not
    if (isValid) {
      const url =
        "http://breed-dev-back.vuwork.com:8082/newsletter_subscription/add";
      httpPost(url, newsletterData)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.props.enqueueSnackbar("Record added successfully.", {
              variant: "success",
              anchorOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            });
          }
        })
        .catch((error) => {
          // handle error
          if (error.response.status === 400) {
            const action = this.action;
            this.props.enqueueSnackbar(error.response.data.message, {
              variant: "error",
              action,
              anchorOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            });
          }
        });
    }
  };

  render() {
    const {
      homepage_bottom_left_banner,
      homepage_bottom_right_banner,
      name_error,
      email_error
    } = this.state;

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
                        name="name"
                        onChange={this.changeHandler}
                      />
                      {name_error && <p style={{color: "#f44336"}}>{name_error}</p>}
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
                        name="email"
                        onChange={this.changeHandler}
                      />
                      {email_error && <p style={{color: "#f44336"}}>{email_error}</p>}
                    </FormControl>
                  </Box>
                  <Box
                    className="submit-newsletter-main"
                    width={this.props.width === "xs" ? "100px" : "45px"}
                    marginTop={this.props.width === "xs" ? "0px" : "26px"}
                  >
                    <Box className="submit-newsletter-child">
                      <Box className="submit-newsletter-grand-child">
                        <ArrowRightAltIcon onClick={this.onSubmit} />
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

export default withWidth()(withSnackbar(Newsletter));
