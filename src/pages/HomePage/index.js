import React, { Component } from "react";
import "./style.css";
import withWidth from "@material-ui/core/withWidth";
import Header from "../Layout/Header/";
import SliderTop from "./Slider/";
import BreedAdopter from "./BreedAdopter/";
import RecentListing from "./RecentListing/";
import Work from "./Work/";
import Portfolio from "./Portfolio/";
import HappyClients from "./HappyClients/";
import Banner from "./Banner/";
import RecentArticals from "./RecentArticals/";
import Newsletter from "./Newsletter/";
import Footer from "../Layout/Footer/";

class HomePage extends Component {
  /**
   * State
   */
  state = {
    is_open: false,
  };

  render() {
    return (
      <>
        <Header />
        <SliderTop />
        <BreedAdopter />
        <RecentListing />
        <Work />
        <Portfolio />
        <HappyClients />
        <Banner />
        <RecentArticals />
        <Newsletter />
        <Footer />
      </>
    );
  }
}

export default withWidth()(HomePage);
