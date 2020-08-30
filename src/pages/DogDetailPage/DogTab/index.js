import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import availableDogImage from "../../../images/available-dog.png";
import greenOkIcon2 from "../../../images/green-ok-icon2.png";
import eyeIcon from "../../../images/eye-icon.png";
import downloadIcon from "../../../images/download-icon.png";
import { httpGet } from "../../../utils/http";
import { withRouter } from "react-router-dom";
import Link from "@material-ui/core/Link";

const file_types = {
  Availability: 3,
  Litter_History: 4,
  Health_Testing: 5,
  Temperament: 6,
  Hunt_Tests: 7,
};

class DogTab extends Component {
  // state
  state = {
    dog_detail: "",
    dog_files: [],
    file_type: file_types.Availability,
  };

  componentDidMount() {
    this.getDogsDetail();
  }
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
          dog_files: response.data.dog_files,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  //tab section function
  openTab = (file_type) => {
    
    this.setState({
      file_type,
    });
    
  };

  render() {
    const { dog_detail, dog_files, file_type } = this.state;
    return (
      <>
        <Box>
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="dog-info-tab-parent">
              <Box
                display="flex"
                flexDirection={this.props.width === "xs" ? "column" : "row"}
              >
                <Box
                  className={
                    file_type === file_types.Availability
                      ? "tab-div-open"
                      : "tab-div-close"
                  }
                >
                  <Box
                    marginTop="-8px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    borderRight="1px solid rgb(224, 219, 213)"
                    borderBottom="0px"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.openTab(file_types.Availability)}
                  >
                    Availability
                  </Box>
                </Box>
                <Box
                  className={
                    file_type === file_types.Litter_History
                      ? "tab-div-open"
                      : "tab-div-close"
                  }
                >
                  <Box
                    marginTop="-8px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    borderRight="1px solid rgb(224, 219, 213)"
                    borderBottom="0px"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.openTab(file_types.Litter_History)}
                  >
                    Litter History
                  </Box>
                </Box>
                <Box
                  className={
                    file_type === file_types.Health_Testing
                      ? "tab-div-open"
                      : "tab-div-close"
                  }
                >
                  <Box
                    marginTop="-8px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    borderRight="1px solid rgb(224, 219, 213)"
                    borderBottom="0px"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.openTab(file_types.Health_Testing)}
                  >
                    Health Testing
                  </Box>
                </Box>
                <Box
                  className={
                    file_type === file_types.Temperament
                      ? "tab-div-open"
                      : "tab-div-close"
                  }
                >
                  <Box
                    marginTop="-8px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    borderRight="1px solid rgb(224, 219, 213)"
                    borderBottom="0px"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.openTab(file_types.Temperament)}
                  >
                    Temperament
                  </Box>
                </Box>
                <Box
                  className={
                    file_type === file_types.Hunt_Tests
                      ? "tab-div-open"
                      : "tab-div-close"
                  }
                >
                  <Box
                    marginTop="-8px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.openTab(file_types.Hunt_Tests)}
                  >
                    Hunt Tests
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection={this.props.width === "xs" ? "column" : "row"}
                textAlign={this.props.width === "xs" ? "center" : "left"}
                paddingTop={this.props.width === "xs" ? "25px" : "72px"}
                paddingBottom="72px"
              >
                <Box
                  paddingTop="24px"
                  paddingLeft={this.props.width === "xs" ? "0px" : "56px"}
                  paddingRight={this.props.width === "xs" ? "0px" : "80px"}
                >
                  <img src={availableDogImage} alt="dog-img" />
                </Box>
                <Box width="100%">
                  <Box
                    width="100%"
                    fontSize="15px"
                    fontWeight="500"
                    paddingLeft="2px"
                    maxWidth="680px"
                  >
                    {file_type === file_types.Availability &&
                      dog_detail.availability_text}
                    {file_type === file_types.Litter_History &&
                      dog_detail.litter_history_text}
                    {file_type === file_types.Health_Testing &&
                      dog_detail.health_testing}
                    {file_type === file_types.Temperament &&
                      dog_detail.temperament_text}
                    {file_type === file_types.Hunt_Tests &&
                      dog_detail.hunt_tests_text}
                  </Box>
                  <Box
                    className="dog-right-bottom"
                    flexDirection={this.props.width === "xs" ? "column" : ""}
                    marginRight={this.props.width === "xs" ? "0px" : "48px"}
                  >
                    <Box
                      display="flex"
                      marginRight={this.props.width === "xs" ? "0px" : "50px"}
                      justifyContent={this.props.width === "xs" ? "center" : ""}
                    >
                      {dog_files.length > 0 &&
                        dog_files.map((data) => {
                          if (data.file_type != file_type) return;
                          return (
                            <Box display="flex">
                              <Box marginRight="13px">
                                <img src={greenOkIcon2} alt="green-icon" />
                              </Box>
                              <Box className="dog-file">
                                <Link
                                  target="__blank"
                                  style={{
                                    textDecoration: "none",
                                    color: "rgba(0,0,0,.87)",
                                  }}
                                  href={data.filename}
                                >
                                  {data.name}
                                </Link>
                              </Box>
                              <Box className="dog-file">
                                <Link target="__blank" href={data.filename}>
                                  <img src={eyeIcon} alt="eye-icon" />
                                </Link>
                              </Box>
                              <Box className="download-file">
                                <a
                                  href={data.filename}
                                  download={data.filename}
                                  mimetype="application/octet-stream"
                                >
                                  <img src={downloadIcon} alt="download-icon" />
                                </a>
                              </Box>
                            </Box>
                          );
                        })}
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

export default withWidth()(withRouter(DogTab));
