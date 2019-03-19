import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateNew from "./components/CreateNew";
import Home from "./components/Home";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route path="/" exact component={Home} />
          <Route path="/CreateNew" component={CreateNew} />
          <Route path="/Search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
