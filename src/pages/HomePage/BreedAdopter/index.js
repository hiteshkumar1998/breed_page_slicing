import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";

class BreedAdopter extends Component {
    render() {
      return (
        <>
         <Box className="breeder-adopter-parent">
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="breeder-adopter-child">
              <Box
                className="breeder-adopter-grand-child"
                flexDirection={this.props.width === "xs" ? "column" : "row"}
                justifyContent={
                  this.props.width === "xs" ? "center" : "space-between"
                }
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Box style={{ textAlign: "center", color: "white" }}>
                    <Box style={{ fontSize: "30px", fontWeight: 600 }}>
                      I am a breeder
                    </Box>
                    <Box
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        marginBottom: "16px",
                      }}
                    >
                      Reference site about Lorem Ipsum, giving <br />{" "}
                      information on its origins.
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        type="button"
                        style={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          color: "#fff",
                          backgroundColor: "#db5e1e",
                          textTransform: "none",
                          fontWeight: "600",
                          borderRadius: "0px",
                        }}
                      >
                        List your dog
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Box style={{ paddingLeft: "16px", paddingRight: "16px" }}>
                  <hr
                    height={this.props.width === "xs" ? "1px" : "128px"}
                    style={{
                      backgroundColor: "black",

                      border: "unset",
                      width: "1px",
                      height: "100%",
                    }}
                  ></hr>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Box style={{ textAlign: "center", color: "white" }}>
                    <Box style={{ fontSize: "30px", fontWeight: 600 }}>
                      I am looking to adopt
                    </Box>
                    <Box
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        marginBottom: "16px",
                      }}
                    >
                      Reference site about Lorem Ipsum, giving <br />{" "}
                      information on its origins.
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        type="button"
                        style={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          color: "#fff",
                          backgroundColor: "#db5e1e",
                          textTransform: "none",
                          fontWeight: "600",
                          borderRadius: "0px",
                        }}
                      >
                        Find a dog
                      </Button>
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
  
  export default withWidth()(BreedAdopter);
  