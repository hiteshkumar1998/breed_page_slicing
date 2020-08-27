import React, { Component } from "react";
import withWidth from "@material-ui/core/withWidth";
import "./style.css";
import Header from "../Layout/Header/ListedDogPage";
import DogProfile from "./DogProfile";
import Footer from "../Layout/Footer/";

class ListedDogPage extends Component {

  render() {
    return (
      <>
        <Header/>
        <DogProfile/>
        <Footer/>
      </>
    );
  }
}

export default withWidth()(ListedDogPage);
