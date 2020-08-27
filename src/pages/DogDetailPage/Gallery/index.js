import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";

class Gallery extends Component {
    render() {
      return (
        <>
         <Box paddingTop="80px">
          <Container style={{ maxWidth: "1208px" }}>
            <Box>
              <Box fontSize="21px" fontWeight="600">
                Gallery
              </Box>
              <Box className="dropdown-main">
                <form>
                  <Select name="media" defaultValue="images">
                    <Option value="images" label="Images" />
                    <Option value="videos" label="Videos" />
                  </Select>
                </form>
              </Box>
            </Box>
            <Box marginBottom="48px">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <img
                    src="http://breed-dev-back.vuwork.com:8082/images/dogs/mainImage/144/main_image-1594272218923-san-diego-dog-1597294652598.png"
                    alt="gallery-img"
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <img
                        src="http://breed-dev-back.vuwork.com:8082/images/dogs/mainImage/144/main_image-1594272218923-san-diego-dog-1597294652598.png"
                        alt="gallery-img"
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <img
                        src="http://breed-dev-back.vuwork.com:8082/images/dogs/mainImage/144/main_image-1594272218923-san-diego-dog-1597294652598.png"
                        alt="gallery-img"
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <img
                        src="http://breed-dev-back.vuwork.com:8082/images/dogs/mainImage/144/main_image-1594272218923-san-diego-dog-1597294652598.png"
                        alt="gallery-img"
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <img
                        src="http://breed-dev-back.vuwork.com:8082/images/dogs/mainImage/144/main_image-1594272218923-san-diego-dog-1597294652598.png"
                        alt="gallery-img"
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box marginTop="80px" textAlign="center" marginBottom="8px">
              <Button
                variant="contained"
                color="secondary"
                style={{
                  backgroundColor: "#db5e1e",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "0px",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                Ask about Pearl
              </Button>
              <Box marginTop="12px" font-size="15px">
                <a href="/" style={{ color: "rgb(109, 109, 109)" }}>
                  Back to Home
                </a>
              </Box>
            </Box>
          </Container>
        </Box>
        </>
      );
    }
  }
  
  export default withWidth()(Gallery);
  