import React, { Component } from "react";
import withWidth from "@material-ui/core/withWidth";
import "./style.css";
import Header from "../Layout/Header/";
import Footer from "../Layout/Footer/";
import DogInformation from "./DogInformation/";
import DogTab from "./DogTab/";
import Gallery from "./Gallery/";
import Banner from "./Banner/";

class DogDetailPage extends Component {

  render() {
    return (
      <>
        <Header/>
        <DogInformation/>
        <DogTab/>
        <Gallery/>
        <Banner/>
        <Footer/>
      </>
    );
  }
}

export default withWidth()(DogDetailPage);
