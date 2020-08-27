import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import heartIcon from "../../../images/heart.png";
import Button from "@material-ui/core/Button";

class DogInformation extends Component {
    render() {
      return (
        <>
          <Box>
          <Box
            paddingTop="80px"
            paddingBottom={this.props.width==="xs" ? "45px" : "0px"}
            style={{ backgroundColor: "#e0dbd5" }}
          >
            <Container style={{ maxWidth: "1208px" }}>
              <Box className="dog-name-text" fontSize = {this.props.width==="xs" ? "30px" : "50px"} textAlign = {this.props.width==="xs" ? "center" : "left"}>Pearl</Box>
              <Box  fontSize = "16px" fontWeight="700" marginBottom="40px" textAlign = {this.props.width==="xs" ? "center" : "left"}>Kuiu's Bearded Honeybadger</Box>
              <Grid container>
                <Grid item xs={12} sm={6} md={5}>
                  <Box width={this.props.width==="xs" ? "100%" : "336px"} marginBottom={this.props.width==="xs" ? "45px" : "0px"}>
                    <Box className="dog-image-box-child">
                      <img
                        src="http://breed-dev-back.vuwork.com:8082/images/dogs/mainImage/144/main_image-1594272218923-san-diego-dog-1597294652598.png"
                        alt="dog-img"
                        height="100%"
                        width="100%"
                      />
                      <Box className="like-dislike-main">
                        <img src={heartIcon} alt="heart-icon" className="heartIcon"/>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <Box marginTop= "-5px">
                        <Box fontWeight="700" fontSize="20px">Availability</Box>
                        <Box fontWeight="500" fontSize="14px">Available Now</Box>
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
                    flexDirection= {this.props.width==="xs" ? "row" : "column"}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingRight= {this.props.width==="xs" ? "0px" : "48px"}
                      flexDirection= {this.props.width==="xs" ? "column" : "row"}
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
                        <Box fontSize="15px">April 4, 2018</Box>
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
                        marginTop={this.props.width==="xs" ? "40px" : "0px"}
                        marginBottom={this.props.width==="xs" ? "40px" : "0px"}
                      >
                        <Box fontSize="21px" fontWeight="600">
                          Sex
                        </Box>
                        <Box fontSize="15px">Male</Box>
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
          
          <Box marginTop={this.props.width==="xs" ? "0px" : "-288px"} style={{ backgroundColor: "white" }}>
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
                            Dr. Dayna Baxter
                          </Box>
                        </Box>
                        <Box marginBottom="32px">
                          <Box fontSize="21px" fontWeight="600">
                            Location
                          </Box>
                          <Box fontSize="15px" textTransform="capitalize">
                            Houseton, TX 77035
                          </Box>
                        </Box>
                        <Box marginBottom="32px">
                          <Box fontSize="21px" fontWeight="600">
                            Website
                          </Box>
                          <Box fontSize="15px" textTransform="capitalize">
                            wwww.website.com
                          </Box>
                        </Box>
                        <Box>
                          <Box fontSize="21px" fontWeight="600">
                            Contact
                          </Box>
                          <Box fontSize="15px" textTransform="capitalize">
                            +1 (226) 4730753
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
                            Coefficient of Inbreeding from Breedmate
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
                            <Box marginRight="8px" marginTop= "3px">
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsSAAALEgHS3X78AAAA4klEQVQokY2SzRGCQAyFn2gBdqAdaAdYggUwIyXQgS1w9OghBVACdoB3DtqBVoDzadbBQX5yyiT5Nm/f7qxpGvVFkiRbSYWklY9cJO17IQdKSQ8Hd5I2gIsR4MawmT28Ti2OpgLtiAaAVNK61VtKon+PeoDM87QFlD76MeIPUAR5Plj6Vg4p53VdTwXonciRl7utY0DutRwo9kLm8BCAm1Uwompd9K27DyABeuKIS8Ml8iC3AxD8CBpH7mJmQLiJRA7pAESw/CzpwMN5nQ96ZauZYcxPfD+svxXSCLZyUDckvQDiaXGb9gc+wAAAAABJRU5ErkJggg=="
                                alt="pdf-icon"
                              />
                            </Box>
                            <Box fontSize="15px" textTransform="capitalize">
                              Draft Name
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
                            <Box marginRight="8px" marginTop= "3px">
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsSAAALEgHS3X78AAAA4klEQVQokY2SzRGCQAyFn2gBdqAdaAdYggUwIyXQgS1w9OghBVACdoB3DtqBVoDzadbBQX5yyiT5Nm/f7qxpGvVFkiRbSYWklY9cJO17IQdKSQ8Hd5I2gIsR4MawmT28Ti2OpgLtiAaAVNK61VtKon+PeoDM87QFlD76MeIPUAR5Plj6Vg4p53VdTwXonciRl7utY0DutRwo9kLm8BCAm1Uwompd9K27DyABeuKIS8Ml8iC3AxD8CBpH7mJmQLiJRA7pAESw/CzpwMN5nQ96ZauZYcxPfD+svxXSCLZyUDckvQDiaXGb9gc+wAAAAABJRU5ErkJggg=="
                                alt="pdf-icon"
                              />
                            </Box>
                            <Box fontSize="15px" textTransform="capitalize">
                              Draft Name
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
  
  export default withWidth()(DogInformation);
  