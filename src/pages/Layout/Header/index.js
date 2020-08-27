import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import dogImage from "../../../images/logo.png";
import withWidth from "@material-ui/core/withWidth";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

class Header extends Component {
  /**
   * State
   */
  state = {
    is_open: false,
    is_tab_breed: true,
  };

  openNav = () => {
    this.setState({ is_open: true });
  };

  closeNav = () => {
    this.setState({ is_open: false });
  };

  render() {
    return (
      <>
        <Box className="navbar-container">
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="navbar">
              <img src={dogImage} alt="header-logo" />
              {this.props.width === "xs" && (
                <Box>
                  {this.state.is_open !== true ? (
                    <Box className="global-search-main">
                      <Box>
                        <input
                          type="text"
                          name="search"
                          placeholder="Type a breed"
                          className="global-search"
                          style={{ color: "red" }}
                        />
                      </Box>
                      <Box className="search-icon">
                        <SearchIcon />
                      </Box>
                    </Box>
                  ) : (
                    ""
                  )}
                  <Box
                    onClick={this.openNav}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <MenuIcon fontSize="large" />
                  </Box>
                </Box>
              )}

              {this.state.is_open === true || this.props.width !== "xs" ? (
                <Box
                  className={
                    this.props.width === "xs"
                      ? "header-right-div-xs"
                      : "header-right-div"
                  }
                >
                  <Box className={this.props.width === "xs" ? "" : "left-div"}>
                    <Box
                      className="left-div-child"
                      display={this.props.width === "xs" ? "" : "flex"}
                    >
                      <Box
                        paddingBottom={
                          this.props.width === "xs" ? "15px" : "0px"
                        }
                        paddingLeft={this.props.width === "xs" ? "15px" : "0px"}
                      >
                        <strong>Home</strong>
                      </Box>
                      {this.props.width === "xs" ? (
                        ""
                      ) : (
                        <Box className="text"></Box>
                      )}
                      <Box
                        paddingBottom={
                          this.props.width === "xs" ? "15px" : "0px"
                        }
                        paddingLeft={this.props.width === "xs" ? "15px" : "0px"}
                      >
                        About Us
                      </Box>
                      {this.props.width === "xs" ? (
                        ""
                      ) : (
                        <Box className="text"></Box>
                      )}
                      <Box
                        paddingBottom={
                          this.props.width === "xs" ? "15px" : "0px"
                        }
                        paddingLeft={this.props.width === "xs" ? "15px" : "0px"}
                      >
                        Find a dog
                      </Box>
                      {this.props.width === "xs" ? (
                        ""
                      ) : (
                        <Box className="text"></Box>
                      )}
                      <Box
                        paddingBottom={
                          this.props.width === "xs" ? "15px" : "0px"
                        }
                        paddingLeft={this.props.width === "xs" ? "15px" : "0px"}
                      >
                        List your dog
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className="right-div"
                    display={this.props.width === "xs" ? "block" : "flex"}
                  >
                    {this.state.is_open === true &&
                    this.props.width === "xs" ? (
                      ""
                    ) : (
                      <Box className="global-search-main">
                        <Box>
                          <input
                            type="text"
                            name="search"
                            placeholder="Type a breed"
                            className="global-search"
                            style={{ color: "red" }}
                          />
                        </Box>
                        <Box className="search-icon">
                          <SearchIcon />
                        </Box>
                      </Box>
                    )}

                    <Box
                      className="login-button"
                      display={this.props.width === "xs" ? "flex" : ""}
                      justifyContent={
                        this.props.width === "xs" ? "space-around" : ""
                      }
                      paddingLeft={this.props.width === "xs" ? "0px" : "30px"}
                    >
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
                          Sign In
                        </Button>
                      </Box>
                      {this.state.is_open === true ? (
                        <Box onClick={this.closeNav} fontSize="large">
                          <CloseIcon />
                        </Box>
                      ) : (
                        ""
                      )}
                    </Box>
                  </Box>
                </Box>
              ) : (
                ""
              )}
            </Box>
          </Container>
        </Box>
      </>
    );
  }
}

export default withWidth()(Header);
