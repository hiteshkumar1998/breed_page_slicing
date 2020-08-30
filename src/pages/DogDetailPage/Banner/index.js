import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import { httpGet } from "../../../utils/http";
import Link from "@material-ui/core/Link";

class Banner extends Component {
  // state
  state = {
    dog_detail_page_banner: "",
  };

  componentDidMount() {
    this.getDogDetailPageBannerById();
  }

  // declare dog detail page banner function
  getDogDetailPageBannerById = () => {
    const url = "http://breed-dev-back.vuwork.com:8082/getBannerById/";
    const BannerId = 9;
    httpGet(url, BannerId)
      .then((response) => {
        this.setState({
          dog_detail_page_banner: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    const { dog_detail_page_banner } = this.state;
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
                <Link href={dog_detail_page_banner.link}>
                  <img
                    src={dog_detail_page_banner.image}
                    width="100%"
                    alt="banner-img"
                  />
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </>
    );
  }
}

export default withWidth()(Banner);
