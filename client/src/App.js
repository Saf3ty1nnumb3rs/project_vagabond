import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { injectGlobal } from "styled-components";


import LandingView from "./components/LandingView";
import Navbar from "./components/Navbar";
import SingleCityView from "./components/showPageView/SingleCityView";
import SinglePostView from "./components/postviewcomponents/SinglePostView"


injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
`

class App extends Component {
  state = {
    cities: [
        
      ],
    cityname: "",
    error: ""
  };
  
  componentDidMount() {
    this.getAllCities();
  }

  getAllCities = async () => {
    try {
      const response = await axios.get("/api/cities");
      console.log(response.data)
      this.setState({ cities: response.data.cities,
        cityname: response.data.cityname
       });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  render() {
    const SingleCityWrapper = props => {
      return <SingleCityView cities={this.state.cities} {...props} />;
    }
    const SinglePostWrapper = props => {
      return <SinglePostView cities={this.state.cities} {...props} />;
    }  


    
    return (
      <Router>
        <div className="App">
          <Navbar {...this.props} cities={this.state.cities} cityname={this.props.city_name} />
          <Switch>
            <Route exact path="/" component={LandingView} />
            <Route exact path="/cities/:id" render={SingleCityWrapper} />
            <Route exact path="/cities/:citiesId/posts/:id" render={SinglePostWrapper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
