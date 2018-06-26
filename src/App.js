import React, { Component } from "react";
import "./App.css";
import { GenerateTree } from "./GenerateTree";
import jsontest from "./components/json/test.json";
class App extends Component {
  render() {
    return (
      <div className="App">
        <GenerateTree data={jsontest} />
      </div>
    );
  }
}

export default App;
