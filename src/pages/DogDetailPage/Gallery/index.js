import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import { httpGet } from "../../../utils/http";

//define gallery types
const Gallery_Types = {
  Images: 1,
  Videos: 2,
  All: 3,
};
class Gallery extends Component {
  // state
  state = {
    dog_details: "",
    dog_images: [],
    gallery_type: Gallery_Types.Images,
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
          dog_details: response.data,
          dog_images: response.data.dog_images,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  //gallery section function
  openGallery = (event) => {
    this.setState({
      gallery_type: event.target.value,
    });
  };
  render() {
    const { gallery_type, dog_details, dog_images } = this.state;
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
                  <Select
                    name="gallery"
                    value={gallery_type}
                    onChange={this.openGallery}
                  >
                    <Option value="1" label="Images" />
                    <Option value="2" label="Videos" />
                    <Option value="3" label="All" />
                  </Select>
                </form>
              </Box>
            </Box>

            {(gallery_type == Gallery_Types.Images ||
              gallery_type == Gallery_Types.All) && (
              <Box marginBottom="48px">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <img
                      src={dog_details.main_image}
                      alt="gallery-img"
                      width="100%"
                      height="100%"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={3}>
                      {dog_images.length > 0 &&
                        dog_images.map((data) => {
                          return (
                            <Grid item xs={12} sm={6}>
                              <img
                                src={data.image}
                                alt="gallery-img"
                                width="100%"
                                height="100%"
                              />
                            </Grid>
                          );
                        })}
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            )}
            {(gallery_type == Gallery_Types.Videos ||
              gallery_type == Gallery_Types.All) && (
              <Box marginBottom="48px">
                <ReactPlayer
                  width="100%"
                  height="360px"
                  controls
                  url={dog_details.main_video}
                />
              </Box>
            )}
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

export default withWidth()(withRouter(Gallery));
