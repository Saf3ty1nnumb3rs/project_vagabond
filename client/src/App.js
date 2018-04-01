import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import LandingView from "./components/LandingView";
import Navbar from "./components/Navbar";
import SingleCityView from "./components/showPageView/SingleCityView";

class App extends Component {
  state = {
    cities: [],
    error: ""
  };

  componentDidMount() {
    this.getAllCities();
  }

  getAllCities = async () => {
    try {
      const response = await axios.get("/api/cities");
      this.setState({ cities: response.data.cities });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  render() {
    const SingleCityWrapper = props => {
      return <SingleCityView cities={this.state.cities} {...props} />;
    };
    return (
      <Router>
        <div className="App">
          <Navbar cities={this.state.cities} />
          <Switch>
            <Route exact path="/" component={LandingView} />
            <Route exact path="/cities/:id" render={SingleCityWrapper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
