import React, { Component } from "react";
import StringField from "./StringField";
import NumberField from "./NumberField";

export class FieldSelector extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }
  checkURL = url => {
    return url.match(/\.(jpg|gif|png)$/) != null;
  };

  isNumeric = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  queryInput = () => {
    // Is a number
    if (this.isNumeric(this.props.data)) {
      return (
        <NumberField
          keyValue={this.props.keyValue}
          data={this.props.data}
          level={this.props.level}
        />
      );
    }
    if (typeof this.props.data === "string") {
      if (this.checkURL(this.props.data)) {
        return <img src={this.props.data} alt="" />;
      }
      return (
        <StringField
          keyValue={this.props.keyValue}
          data={this.props.data}
          level={this.props.level}
        />
      );
    } else {
      return this.props.data;
    }
  };

  render() {
    return <div>{this.queryInput()}</div>;
  }
}

export default FieldSelector;
