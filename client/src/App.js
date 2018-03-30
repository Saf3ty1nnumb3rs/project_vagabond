import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingView from "./components/LandingView";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
