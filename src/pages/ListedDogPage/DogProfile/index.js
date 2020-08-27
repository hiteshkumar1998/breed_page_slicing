import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import EditIcon from "@material-ui/icons/Edit";
import fileIcon from "../../../images/file-icon.jpeg";
import pinIcon from "../../../images/pin-icon.png";
import fileVerifiedIcon from "../../../images/file-verified-icon.jpeg";

class DogProfile extends Component {
  render() {
    return (
      <>
        <Box className="dog-profile-main">
          <Container style={{ maxWidth: "1208px" }}>
            <Box marginBottom="55px">
              <Box fontSize={this.props.width==="xs" ? "30px" : "50px"} fontWeight="600" lineHeight="1.1">
                Profile
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection={this.props.width === "xs" ? "column" : ""}
            >
              <Box
                width={this.props.width === "xs" ? "100%" : "29%"}
                style={{ backgroundColor: "#fff" }}
              >
                <Box
                  paddingTop="56px"
                  paddingLeft={this.props.width === "xs" ? "15px" : "65px"}
                  paddingRight={this.props.width === "xs" ? "15px" : "65px"}
                  paddingBottom="56px"
                >
                  <Box textAlign="center" marginBottom="64px">
                    <Box
                      display="flex"
                      marginBottom="8px"
                      justifyContent="center"
                    >
                      <Box
                        width="75px"
                        height="75px"
                        overflow="hidden"
                        borderRadius="50px"
                      >
                        <img
                          src="http://breed-dev-back.vuwork.com:8082/images/page/pageImages/2/image-1592908143836-Screenshot_6.png"
                          alt="img"
                          height="100%"
                          width="100%"
                          objectFit="contain"
                        />
                      </Box>
                    </Box>
                    <Box fontSize="21px" fontWeight="600">
                      Dayna Baxter
                    </Box>
                    <Box
                      color="rgb(219, 94, 30)"
                      fontSize="15px"
                      cursor="pointer"
                    >
                      Edit Picture
                    </Box>
                  </Box>
                  <Box>
                    <Box marginBottom="48px">
                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                        cursor="pointer"
                      >
                        <Box
                          marginTop="8px"
                          marginRight="16px"
                          color="black"
                          cursor="pointer"
                        >
                          <StarBorderIcon />
                        </Box>
                        <Box cursor="pointer" fontSize="21px">
                          My Profile
                        </Box>
                      </Box>
                      <Box>
                        <hr
                          style={{
                            height: "1px",
                            backgroundColor: "rgb(198, 196, 193)",
                          }}
                        ></hr>
                      </Box>
                    </Box>
                    <Box marginBottom="48px">
                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                        cursor="pointer"
                      >
                        <Box
                          marginTop="8px"
                          marginRight="16px"
                          color="black"
                          cursor="pointer"
                        >
                          <StarBorderIcon />
                        </Box>
                        <Box cursor="pointer" fontSize="21px">
                          Likes
                        </Box>
                      </Box>
                      <Box>
                        <hr
                          style={{
                            height: "1px",
                            backgroundColor: "rgb(198, 196, 193)",
                          }}
                        ></hr>
                      </Box>
                    </Box>
                    <Box marginBottom="48px">
                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                        cursor="pointer"
                      >
                        <Box
                          marginTop="8px"
                          marginRight="16px"
                          color="black"
                          cursor="pointer"
                        >
                          <StarBorderIcon />
                        </Box>
                        <Box cursor="pointer" fontSize="21px">
                          Plan
                        </Box>
                      </Box>
                      <Box>
                        <hr
                          style={{
                            height: "1px",
                            backgroundColor: "rgb(198, 196, 193)",
                          }}
                        ></hr>
                      </Box>
                    </Box>
                    <Box marginBottom="48px">
                      <Box
                        display="flex"
                        alignItems="center"
                        marginBottom="16px"
                        cursor="pointer"
                      >
                        <Box
                          marginTop="8px"
                          marginRight="16px"
                          color="black"
                          cursor="pointer"
                        >
                          <StarBorderIcon />
                        </Box>
                        <Box cursor="pointer" fontSize="21px">
                          My Listings
                        </Box>
                      </Box>
                      <Box>
                        <hr
                          style={{
                            height: "4px",
                            backgroundColor: "rgb(219, 94, 30)",
                          }}
                        ></hr>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                width={this.props.width === "xs" ? "100%" : "71%"}
                marginLeft={this.props.width === "xs" ? "0px" : "40px"}
                style={{ backgroundColor: "#fff" }}
              >
                <Box
                  paddingTop="56px"
                  paddingBottom="48px"
                  paddingLeft={this.props.width === "xs" ? "15px" : "64px"}
                  paddingRight={this.props.width === "xs" ? "15px" : "64px"}
                >
                  <Box
                    display="flex"
                    fontSize="21px"
                    marginBottom="20px"
                    justifyContent="space-between"
                    fontWeight="600"
                  >
                    <Box>Pearl's profile</Box>
                    <Box cursor="pointer" color="rgb(219, 94, 30)">
                      <EditIcon />
                    </Box>
                  </Box>
                  <Box marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      Dog Name:
                    </Box>
                    <Box width="50%" cursor="pointer">
                      Pearl
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      Breed Type:
                    </Box>
                    <Box width="50%" cursor="pointer">
                      db.abc@gmail.com
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      DOB:
                    </Box>
                    <Box width="50%" cursor="pointer">
                      April 14, 2018
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      Sex:
                    </Box>
                    <Box width="50%" cursor="pointer">
                      Female
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      Weight:
                    </Box>
                    <Box width="50%" cursor="pointer">
                      55 Pounds
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      COI:
                    </Box>
                    <Box width="50%" cursor="pointer">
                      Draft 1
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      Pedigree:
                    </Box>
                    <Box width="50%" cursor="pointer" display="flex">
                      <Box>Draft 1</Box>
                      <Box marginLeft="15px" marginTop="3px">
                        <img
                          src={pinIcon}
                          alt="pdf-icon"
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      Availability:
                    </Box>
                    <Box width="50%" cursor="pointer">
                      Available Now
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box
                    display="flex"
                    fontSize="21px"
                    marginTop="90px"
                    marginBottom="20px"
                    justifyContent="space-between"
                    fontWeight="600"
                  >
                    <Box display="flex">
                      <Box>Health Testing</Box>
                      <Box>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsSAAALEgHS3X78AAABzElEQVQ4jYWUO0sDQRSFj0tEVNQUppCoa5FCbHw1dmqjbWotVvwBGrDSRn+BplYEUyopYhmrFKI2Six8FFu4kkYIEiMmBB+RM+yuu+vM5sDCMnfmm3vnPtqazSZkMg19AsAcgKjHXARQSGSsiuzMP5hp6EkAaQC69BbgDUAOQCoI9cFMQz8CYCggMuhcImMVnQWtFahjeAydozPQunqDpj6GbD/Hn2emoacA7Hl3dk8vIra0jUh/3F37uDnDy8EGfmpV71YLwARD1kxD5wPveK3t/YMYWNv3gcQFUwuILW8HPeTbppwwk7bLPq8c/dTfhUcym0cr/I3YMJ8+rvNoWHdi6atcwnetipHdC2idPTKQ8I5vFwnUkdBnuSS++OaxHfaQC6o/XKqAUcJmVVZm0av645VIgEqE3QIYV+4A8H6eRSV/iMbzfdg2AXtSwV5zaTe0ViAAFWazoLIyESxWhtdCFjuBsCO7NXxi5ce3ThBdWMXA+kErGBnQ7GZNB63MJj1jnVXPs2EgyznvNrpp6AVZZtkNBIdo0ml2t9Ht4j2VeagQn2beOzVk84ytwV5VzTMqwz2JjMVKcBU2aekpxws/dgk94OFcECIE4Bd3z7LsHe2T/QAAAABJRU5ErkJggg=="
                          alt="icon"
                          style={{
                            height: "19px",
                            marginTop: "7px",
                            marginLeft: "5px",
                            cursor: "pointer",
                          }}
                        />
                      </Box>
                    </Box>
                    <Box cursor="pointer" color="rgb(219, 94, 30)">
                      <EditIcon />
                    </Box>
                  </Box>
                  <Box marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      OFA hips:
                    </Box>
                    <Box width="50%" cursor="pointer" display="flex">
                      <Box>Draft A</Box>
                      <Box marginLeft="20px">
                        <img src={fileIcon} alt="icon" />
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      OFA elbows:
                    </Box>
                    <Box width="50%" cursor="pointer" display="flex">
                      <Box>Draft B</Box>
                      <Box marginLeft="20px">
                        <img src={fileVerifiedIcon} alt="icon" />
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      OFA Eyes:
                    </Box>
                    <Box width="50%" cursor="pointer" display="flex">
                      <Box>Draft C</Box>
                      <Box marginLeft="20px">
                        <img src={fileIcon} alt="icon" />
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      OFA Thyroid database:
                    </Box>
                    <Box width="50%" cursor="pointer" display="flex">
                      <Box>Draft D</Box>
                      <Box marginLeft="20px">
                        <img src={fileVerifiedIcon} alt="icon" />
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      Advanced cardiac:
                    </Box>
                    <Box width="50%" cursor="pointer" display="flex">
                      <Box>Draft E</Box>
                      <Box marginLeft="20px">
                        <img src={fileVerifiedIcon} alt="icon" />
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box fontWeight="600" width="50%">
                      General labs:
                    </Box>
                    <Box width="50%" cursor="pointer" display="flex">
                      <Box>Draft F</Box>
                      <Box marginLeft="20px">
                        <img src={fileVerifiedIcon} alt="icon" />
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box
                    display="flex"
                    fontSize="21px"
                    marginTop="90px"
                    marginBottom="20px"
                    justifyContent="space-between"
                    fontWeight="600"
                  >
                    <Box display="flex">
                      <Box>Litter History</Box>
                      <Box>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsSAAALEgHS3X78AAABzElEQVQ4jYWUO0sDQRSFj0tEVNQUppCoa5FCbHw1dmqjbWotVvwBGrDSRn+BplYEUyopYhmrFKI2Six8FFu4kkYIEiMmBB+RM+yuu+vM5sDCMnfmm3vnPtqazSZkMg19AsAcgKjHXARQSGSsiuzMP5hp6EkAaQC69BbgDUAOQCoI9cFMQz8CYCggMuhcImMVnQWtFahjeAydozPQunqDpj6GbD/Hn2emoacA7Hl3dk8vIra0jUh/3F37uDnDy8EGfmpV71YLwARD1kxD5wPveK3t/YMYWNv3gcQFUwuILW8HPeTbppwwk7bLPq8c/dTfhUcym0cr/I3YMJ8+rvNoWHdi6atcwnetipHdC2idPTKQ8I5vFwnUkdBnuSS++OaxHfaQC6o/XKqAUcJmVVZm0av645VIgEqE3QIYV+4A8H6eRSV/iMbzfdg2AXtSwV5zaTe0ViAAFWazoLIyESxWhtdCFjuBsCO7NXxi5ce3ThBdWMXA+kErGBnQ7GZNB63MJj1jnVXPs2EgyznvNrpp6AVZZtkNBIdo0ml2t9Ht4j2VeagQn2beOzVk84ytwV5VzTMqwz2JjMVKcBU2aekpxws/dgk94OFcECIE4Bd3z7LsHe2T/QAAAABJRU5ErkJggg=="
                          alt="icon"
                          style={{
                            height: "19px",
                            marginTop: "7px",
                            marginLeft: "30px",
                            cursor: "pointer",
                          }}
                        />
                      </Box>
                    </Box>
                    <Box cursor="pointer" color="rgb(219, 94, 30)">
                      <EditIcon />
                    </Box>
                  </Box>
                  <Box marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box width="100%">
                      <Box fontWeight="600" paddingBottom="10px">
                        Pearl has whelped 2 healthy litters
                      </Box>
                      <Box paddingBottom="5px">
                        Litter 1 (8 pups: 7 males, 1 female)
                      </Box>
                      <Box paddingBottom="5px">
                        Litter 2 (8 pups: 7 males, 1 female)
                      </Box>
                      <Box display="flex">
                        <Box>Litter 3 (8 pups: 7 males, 1 female)</Box>
                        <Box marginLeft="15px" marginTop="3px">
                          <img
                            src={pinIcon}
                            alt="pdf-icon"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="32px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box
                    display="flex"
                    fontSize="21px"
                    marginTop="90px"
                    marginBottom="20px"
                    justifyContent="space-between"
                    fontWeight="600"
                  >
                    <Box display="flex">
                      <Box>Temperament</Box>
                      <Box>
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
                    </Box>
                    <Box cursor="pointer" color="rgb(219, 94, 30)">
                      <EditIcon />
                    </Box>
                  </Box>
                  <Box marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box width="100%">
                      <Box paddingBottom="5px">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </Box>
                      <Box>
                        *Note/letter it is a long established fact that a reader
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="64px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box
                    display="flex"
                    fontSize="21px"
                    marginTop="90px"
                    marginBottom="20px"
                    justifyContent="space-between"
                    fontWeight="600"
                  >
                    <Box display="flex">
                      <Box>Hunt Tests</Box>
                      <Box>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsSAAALEgHS3X78AAABzElEQVQ4jYWUO0sDQRSFj0tEVNQUppCoa5FCbHw1dmqjbWotVvwBGrDSRn+BplYEUyopYhmrFKI2Six8FFu4kkYIEiMmBB+RM+yuu+vM5sDCMnfmm3vnPtqazSZkMg19AsAcgKjHXARQSGSsiuzMP5hp6EkAaQC69BbgDUAOQCoI9cFMQz8CYCggMuhcImMVnQWtFahjeAydozPQunqDpj6GbD/Hn2emoacA7Hl3dk8vIra0jUh/3F37uDnDy8EGfmpV71YLwARD1kxD5wPveK3t/YMYWNv3gcQFUwuILW8HPeTbppwwk7bLPq8c/dTfhUcym0cr/I3YMJ8+rvNoWHdi6atcwnetipHdC2idPTKQ8I5vFwnUkdBnuSS++OaxHfaQC6o/XKqAUcJmVVZm0av645VIgEqE3QIYV+4A8H6eRSV/iMbzfdg2AXtSwV5zaTe0ViAAFWazoLIyESxWhtdCFjuBsCO7NXxi5ce3ThBdWMXA+kErGBnQ7GZNB63MJj1jnVXPs2EgyznvNrpp6AVZZtkNBIdo0ml2t9Ht4j2VeagQn2beOzVk84ytwV5VzTMqwz2JjMVKcBU2aekpxws/dgk94OFcECIE4Bd3z7LsHe2T/QAAAABJRU5ErkJggg=="
                          alt="icon"
                          style={{
                            height: "19px",
                            marginTop: "7px",
                            marginLeft: "30px",
                            cursor: "pointer",
                          }}
                        />
                      </Box>
                    </Box>
                    <Box cursor="pointer" color="rgb(219, 94, 30)">
                      <EditIcon />
                    </Box>
                  </Box>
                  <Box marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box width="100%">
                      <Box paddingBottom="5px" display="flex">
                        <Box>NAVHDA test scores</Box>
                        <Box marginLeft="15px" marginTop="3px">
                          <img
                            src={pinIcon}
                            alt="pdf-icon"
                          />
                        </Box>
                      </Box>
                      <Box paddingBottom="5px" display="flex">
                        <Box>AKC Hunt test scores</Box>
                        <Box marginLeft="15px" marginTop="3px">
                          <img
                            src={pinIcon}
                            alt="pdf-icon"
                          />
                        </Box>
                      </Box>
                      <Box paddingBottom="5px" display="flex">
                        <Box>AKC Show titles</Box>
                        <Box marginLeft="15px" marginTop="3px">
                          <img
                            src={pinIcon}
                            alt="pdf-icon"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop="64px" marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box
                    display="flex"
                    fontSize="21px"
                    marginTop="90px"
                    marginBottom="20px"
                    justifyContent="space-between"
                    fontWeight="600"
                  >
                    <Box>Delete Profile</Box>
                  </Box>
                  <Box marginBottom="32px">
                    <hr
                      height="1px"
                      style={{ backgroundColor: "rgb(216, 216, 216)" }}
                    ></hr>
                  </Box>
                  <Box display="flex" fontSize="15px" marginBottom="20px">
                    <Box width="100%">
                      <Box paddingBottom="5px">
                        It is a long established fact that a reader will be
                        distracted.
                      </Box>
                      <Box
                        color="rgb(219, 94, 30)"
                        fontSize="15px"
                        cursor="pointer"
                      >
                        Delete dog profile
                      </Box>
                    </Box>
                    <Box marginBottom="90px"></Box>
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

export default withWidth()(DogProfile);
