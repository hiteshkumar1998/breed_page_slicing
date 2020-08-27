import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

class Banner extends Component {
    render() {
      return (
        <>
         <Box
          className="fotter-banner-section"
          paddingTop={this.props.width === "xs" ? "45px" : "50px"}
          paddingBottom={this.props.width === "xs" ? "45px" : "80px"}
        >
          <Container style={{ maxWidth: "1208px" }}>
            <Box>
              <Box className="banner-img-div">
                <img
                  src="http://breed-dev-back.vuwork.com:8082/images/banners/10/image-1592824442602-annual-club-banner-1596081735492.png"
                  width="100%"
                  alt="banner-img"
                />
              </Box>
            </Box>
          </Container>
        </Box>
        </>
      );
    }
  }
  
  export default withWidth()(Banner);
  