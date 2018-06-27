import React, { Component } from "react";
import "./App.css";
import { GenerateTree } from "./components/GenerateTree";
import { SaveButton } from "./components/SaveButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <GenerateTree />
          <SaveButton />
        </form>
      </div>
    );
  }
}

export default App;
