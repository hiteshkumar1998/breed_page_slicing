import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/';
import DogDetailPage from './pages/DogDetailPage/';
import ListedDogPage from './pages/ListedDogPage/';

class App extends Component {
  render() {
    return (
      <Router>
         <Route exact path="/" component = {HomePage} />
         <Route exact path="/dog-detail" component = {DogDetailPage} />
         <Route exact path="/listed-dog-profile" component = {ListedDogPage} />
      </Router>
    );
  }
}

export default App;
