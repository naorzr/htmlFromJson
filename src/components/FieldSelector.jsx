import React, { Component } from "react";
import StringField from "./StringField";
export class FieldSelector extends Component {
  checkURL = url => {
    return url.match(/\.(jpg|gif|png)$/) != null;
  };
  queryInput = () => {
    // Is a number
    if (!isNaN(this.props.data)) {
      return this.props.data;
    }
    if (typeof this.props.data === "string") {
      if (this.checkURL(this.props.data)) {
        return <img src={this.props.data} alt="" />;
      }
      return <StringField />;
    } else {
      return this.props.data;
    }
  };
  render() {
    return <div>{this.queryInput()}</div>;
  }
}

export default FieldSelector;
