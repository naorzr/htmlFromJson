import React, { Component } from "react";
import axios from "axios";
export class SaveButton extends Component {
  saveData = e => {
    e.preventDefault();
    console.log(window.sessionStorage);
    axios
      .post("http://localhost:3000/save", window.sessionStorage)
      .then(res => {
        console.log("success");
      })
      .catch(e => console.log(e));
  };
  render() {
    return (
      <div>
        <input type="submit" text="submit" onClick={this.saveData} />
      </div>
    );
  }
}

export default SaveButton;
