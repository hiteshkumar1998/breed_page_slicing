import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import heartIcon from "../../../images/heart.png";
import Button from "@material-ui/core/Button";
import { httpGet } from "../../../utils/http";
import { withRouter } from "react-router-dom";
import Link from "@material-ui/core/Link";

class DogInformation extends Component {
  // state
  state = {
    dog_detail: "",
    user_detail: "",
    dog_files: [],
    tab_open: {
      availability: true,
      litter_history: false,
      health_testing: false,
      temperament: false,
      hunt_tests: false,
    },
  };

  componentDidMount() {
    this.getDogsDetail();
  }

  //date format function
  changeDogDateFormat = (date) => {
    const dogDate = new Date("2020-08-13");
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(dogDate);
  };

  // declare dogs detail function
  getDogsDetail = () => {
    let query_string = new URLSearchParams(this.props.location.search);
    let id = query_string.get("id");

    const url =
      "http://breed-dev-back.vuwork.com:8082/getDogById/" + id + "?dog=1";
    httpGet(url)
      .then((response) => {
        this.setState({
          dog_detail: response.data,
          user_detail: response.data.user,
          dog_files: response.data.dog_files,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    const { dog_detail, user_detail, dog_files } = this.state;
    return (
      <>
        <Box>
          <Box
            paddingTop="80px"
            paddingBottom={this.props.width === "xs" ? "45px" : "0px"}
            style={{ backgroundColor: "#e0dbd5" }}
          >
            <Container style={{ maxWidth: "1208px" }}>
              <Box
                className="dog-name-text"
                fontSize={this.props.width === "xs" ? "30px" : "50px"}
                textAlign={this.props.width === "xs" ? "center" : "left"}
              >
                {dog_detail.title}
              </Box>
              <Box
                fontSize="16px"
                fontWeight="700"
                marginBottom="40px"
                textAlign={this.props.width === "xs" ? "center" : "left"}
              >
                Kuiu's Bearded Honeybadger
              </Box>
              <Grid container>
                <Grid item xs={12} sm={6} md={5}>
                  <Box
                    width={this.props.width === "xs" ? "100%" : "336px"}
                    marginBottom={this.props.width === "xs" ? "45px" : "0px"}
                  >
                    <Box className="dog-image-box-child">
                      <img
                        src={dog_detail.main_image}
                        alt="dog-img"
                        height="100%"
                        width="100%"
                      />
                      <Box className="like-dislike-main">
                        <img
                          src={heartIcon}
                          alt="heart-icon"
                          className="heartIcon"
                        />
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <Box marginTop="-5px">
                        <Box fontWeight="700" fontSize="20px">
                          Availability
                        </Box>
                        <Box fontWeight="500" fontSize="14px">
                          Available Now
                        </Box>
                      </Box>
                      <Box>
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{
                            backgroundColor: "#db5e1e",
                            fontWeight: 600,
                            textTransform: "none",
                            borderRadius: "0px",
                          }}
                        >
                          Ask about Pearl
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={12} sm={6} md={7}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection={this.props.width === "xs" ? "row" : "column"}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingRight={this.props.width === "xs" ? "0px" : "48px"}
                      flexDirection={
                        this.props.width === "xs" ? "column" : "row"
                      }
                    >
                      <Box
                        color="white"
                        width="172px"
                        height="150px"
                        display="flex"
                        textAlign="center"
                        style={{ backgroundColor: "#3f3047" }}
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Box fontSize="21px" fontWeight="600">
                          DOB
                        </Box>
                        <Box fontSize="15px">
                          {this.changeDogDateFormat(dog_detail.date_of_birth)}
                        </Box>
                      </Box>
                      <Box
                        color="white"
                        width="172px"
                        height="150px"
                        display="flex"
                        textAlign="center"
                        style={{ backgroundColor: "#3f3047" }}
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={this.props.width === "xs" ? "40px" : "0px"}
                        marginBottom={
                          this.props.width === "xs" ? "40px" : "0px"
                        }
                      >
                        <Box fontSize="21px" fontWeight="600">
                          Sex
                        </Box>
                        <Box fontSize="15px">
                          {dog_detail.gender === 1 ? "Male" : "Female"}
                        </Box>
                      </Box>
                      <Box
                        color="white"
                        width="172px"
                        height="150px"
                        display="flex"
                        textAlign="center"
                        style={{ backgroundColor: "#3f3047" }}
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Box fontSize="21px" fontWeight="600">
                          Weight
                        </Box>
                        <Box fontSize="15px">Pounds</Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box
            marginTop={this.props.width === "xs" ? "0px" : "-288px"}
            style={{ backgroundColor: "white" }}
          >
            <Container style={{ maxWidth: "1208px" }}>
              <Box paddingTop="80px" paddingBottom="64px">
                <Grid container>
                  <Grid item xs={12} md={5}></Grid>
                  <Grid item xs={12} md={7}>
                    <Box display="flex" justifyContent="space-between">
                      <Box paddingRight="8px">
                        <Box marginBottom="32px">
                          <Box fontSize="21px" fontWeight="600">
                            Owners
                          </Box>
                          <Box fontSize="15px" textTransform="capitalize">
                            {user_detail.firstname} {user_detail.lastname}
                          </Box>
                        </Box>
                        <Box marginBottom="32px">
                          <Box fontSize="21px" fontWeight="600">
                            Location
                          </Box>
                          <Box fontSize="15px" textTransform="capitalize">
                            {typeof user_detail.City_Id !== "undefined" &&
                              user_detail.City_Id.name}
                            {typeof user_detail.City_Id !== "undefined" &&
                              typeof user_detail.State_Id !== "undefined" &&
                              ", "}
                            {typeof user_detail.State_Id !== "undefined" &&
                              user_detail.State_Id.name}
                          </Box>
                        </Box>
                        <Box marginBottom="32px">
                          <Box fontSize="21px" fontWeight="600">
                            Website
                          </Box>
                          <Box fontSize="15px" textTransform="capitalize">
                            {user_detail.website}
                          </Box>
                        </Box>
                        <Box>
                          <Box fontSize="21px" fontWeight="600">
                            Contact
                          </Box>
                          <Box fontSize="15px" textTransform="capitalize">
                            {user_detail.phone}
                          </Box>
                        </Box>
                      </Box>
                      <Box paddingRight="8px">
                        <Box marginBottom="32px">
                          <Box display="flex">
                            <Box fontSize="21px" fontWeight="600">
                              COI
                            </Box>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsSAAALEgHS3X78AAABzElEQVQ4jYWUO0sDQRSFj0tEVNQUppCoa5FCbHw1dmqjbWotVvwBGrDSRn+BplYEUyopYhmrFKI2Six8FFu4kkYIEiMmBB+RM+yuu+vM5sDCMnfmm3vnPtqazSZkMg19AsAcgKjHXARQSGSsiuzMP5hp6EkAaQC69BbgDUAOQCoI9cFMQz8CYCggMuhcImMVnQWtFahjeAydozPQunqDpj6GbD/Hn2emoacA7Hl3dk8vIra0jUh/3F37uDnDy8EGfmpV71YLwARD1kxD5wPveK3t/YMYWNv3gcQFUwuILW8HPeTbppwwk7bLPq8c/dTfhUcym0cr/I3YMJ8+rvNoWHdi6atcwnetipHdC2idPTKQ8I5vFwnUkdBnuSS++OaxHfaQC6o/XKqAUcJmVVZm0av645VIgEqE3QIYV+4A8H6eRSV/iMbzfdg2AXtSwV5zaTe0ViAAFWazoLIyESxWhtdCFjuBsCO7NXxi5ce3ThBdWMXA+kErGBnQ7GZNB63MJj1jnVXPs2EgyznvNrpp6AVZZtkNBIdo0ml2t9Ht4j2VeagQn2beOzVk84ytwV5VzTMqwz2JjMVKcBU2aekpxws/dgk94OFcECIE4Bd3z7LsHe2T/QAAAABJRU5ErkJggg=="
                              alt="icon"
                              style={{
                                height: "19px",
                                marginTop: "5px",
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                          <Box fontSize="15px" textTransform="capitalize">
                            {dog_detail.coi}
                          </Box>
                        </Box>
                        <Box marginBottom="32px">
                          <Box display="flex">
                            <Box fontSize="21px" fontWeight="600">
                              Pedigree
                            </Box>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsSAAALEgHS3X78AAABzElEQVQ4jYWUO0sDQRSFj0tEVNQUppCoa5FCbHw1dmqjbWotVvwBGrDSRn+BplYEUyopYhmrFKI2Six8FFu4kkYIEiMmBB+RM+yuu+vM5sDCMnfmm3vnPtqazSZkMg19AsAcgKjHXARQSGSsiuzMP5hp6EkAaQC69BbgDUAOQCoI9cFMQz8CYCggMuhcImMVnQWtFahjeAydozPQunqDpj6GbD/Hn2emoacA7Hl3dk8vIra0jUh/3F37uDnDy8EGfmpV71YLwARD1kxD5wPveK3t/YMYWNv3gcQFUwuILW8HPeTbppwwk7bLPq8c/dTfhUcym0cr/I3YMJ8+rvNoWHdi6atcwnetipHdC2idPTKQ8I5vFwnUkdBnuSS++OaxHfaQC6o/XKqAUcJmVVZm0av645VIgEqE3QIYV+4A8H6eRSV/iMbzfdg2AXtSwV5zaTe0ViAAFWazoLIyESxWhtdCFjuBsCO7NXxi5ce3ThBdWMXA+kErGBnQ7GZNB63MJj1jnVXPs2EgyznvNrpp6AVZZtkNBIdo0ml2t9Ht4j2VeagQn2beOzVk84ytwV5VzTMqwz2JjMVKcBU2aekpxws/dgk94OFcECIE4Bd3z7LsHe2T/QAAAABJRU5ErkJggg=="
                              alt="icon"
                              style={{
                                height: "19px",
                                marginTop: "5px",
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                          <Box display="flex" marginRight="16px">
                            <Box marginRight="8px" marginTop="3px">
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsSAAALEgHS3X78AAAA4klEQVQokY2SzRGCQAyFn2gBdqAdaAdYggUwIyXQgS1w9OghBVACdoB3DtqBVoDzadbBQX5yyiT5Nm/f7qxpGvVFkiRbSYWklY9cJO17IQdKSQ8Hd5I2gIsR4MawmT28Ti2OpgLtiAaAVNK61VtKon+PeoDM87QFlD76MeIPUAR5Plj6Vg4p53VdTwXonciRl7utY0DutRwo9kLm8BCAm1Uwompd9K27DyABeuKIS8Ml8iC3AxD8CBpH7mJmQLiJRA7pAESw/CzpwMN5nQ96ZauZYcxPfD+svxXSCLZyUDckvQDiaXGb9gc+wAAAAABJRU5ErkJggg=="
                                alt="pdf-icon"
                              />
                            </Box>
                            <Box fontSize="15px" textTransform="capitalize">
                              {dog_files.map((dog_file, index) => {
                                return (
                                  <Box>
                                    {dog_file.file_type === 1 && (
                                      <Link
                                        target="__blank"
                                        style={{
                                          textDecoration: "none",
                                          color: "rgba(0,0,0,.87)",
                                        }}
                                        href={dog_file.filename}
                                      >
                                        {dog_file.name}
                                      </Link>
                                    )}
                                  </Box>
                                );
                              })}
                            </Box>
                          </Box>
                        </Box>
                        <Box marginBottom="32px">
                          <Box display="flex">
                            <Box fontSize="21px" fontWeight="600">
                              Dentition
                            </Box>
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsSAAALEgHS3X78AAABzElEQVQ4jYWUO0sDQRSFj0tEVNQUppCoa5FCbHw1dmqjbWotVvwBGrDSRn+BplYEUyopYhmrFKI2Six8FFu4kkYIEiMmBB+RM+yuu+vM5sDCMnfmm3vnPtqazSZkMg19AsAcgKjHXARQSGSsiuzMP5hp6EkAaQC69BbgDUAOQCoI9cFMQz8CYCggMuhcImMVnQWtFahjeAydozPQunqDpj6GbD/Hn2emoacA7Hl3dk8vIra0jUh/3F37uDnDy8EGfmpV71YLwARD1kxD5wPveK3t/YMYWNv3gcQFUwuILW8HPeTbppwwk7bLPq8c/dTfhUcym0cr/I3YMJ8+rvNoWHdi6atcwnetipHdC2idPTKQ8I5vFwnUkdBnuSS++OaxHfaQC6o/XKqAUcJmVVZm0av645VIgEqE3QIYV+4A8H6eRSV/iMbzfdg2AXtSwV5zaTe0ViAAFWazoLIyESxWhtdCFjuBsCO7NXxi5ce3ThBdWMXA+kErGBnQ7GZNB63MJj1jnVXPs2EgyznvNrpp6AVZZtkNBIdo0ml2t9Ht4j2VeagQn2beOzVk84ytwV5VzTMqwz2JjMVKcBU2aekpxws/dgk94OFcECIE4Bd3z7LsHe2T/QAAAABJRU5ErkJggg=="
                              alt="icon"
                              style={{
                                height: "19px",
                                marginTop: "5px",
                                marginLeft: "5px",
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                          <Box display="flex" marginRight="16px">
                            <Box marginRight="8px" marginTop="3px">
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsSAAALEgHS3X78AAAA4klEQVQokY2SzRGCQAyFn2gBdqAdaAdYggUwIyXQgS1w9OghBVACdoB3DtqBVoDzadbBQX5yyiT5Nm/f7qxpGvVFkiRbSYWklY9cJO17IQdKSQ8Hd5I2gIsR4MawmT28Ti2OpgLtiAaAVNK61VtKon+PeoDM87QFlD76MeIPUAR5Plj6Vg4p53VdTwXonciRl7utY0DutRwo9kLm8BCAm1Uwompd9K27DyABeuKIS8Ml8iC3AxD8CBpH7mJmQLiJRA7pAESw/CzpwMN5nQ96ZauZYcxPfD+svxXSCLZyUDckvQDiaXGb9gc+wAAAAABJRU5ErkJggg=="
                                alt="pdf-icon"
                              />
                            </Box>
                            <Box fontSize="15px" textTransform="capitalize">
                              {dog_files.map((dog_file, index) => {
                                return (
                                  <Box>
                                    {dog_file.file_type === 2 && (
                                      <Link
                                        target="__blank"
                                        style={{
                                          textDecoration: "none",
                                          color: "rgba(0,0,0,.87)",
                                        }}
                                        href={dog_file.filename}
                                      >
                                        {dog_file.name}
                                      </Link>
                                    )}
                                  </Box>
                                );
                              })}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Box>
      </>
    );
  }
}

export default withWidth()(withRouter(DogInformation));
