import React, { Component } from "react";
import StringField from "./StringField";
import NumberField from "./NumberField";
import ImageField from "./ImageField";
import { VideoField } from "./VideoField";

export class FieldSelector extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }
  checkIMG = url => {
    return url.match(/\.(jpg|gif|png)$/) != null;
  };

  checkVID = url => {
    return url.match(/\.(mp4|webm|ogg)$/) != null;
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
      if (this.checkIMG(this.props.data)) {
        return (
          <ImageField
            level={this.props.level}
            data={this.props.data}
            keyValue={this.props.keyValue}
          />
        );
      } else if (this.checkVID(this.props.data)) {
        return (
          <VideoField
            keyValue={this.props.keyValue}
            data={this.props.data}
            level={this.props.level}
          />
        );
      }
      return (
        <StringField
          keyValue={this.props.keyValue}
          data={this.props.data}
          level={this.props.level}
        />
      );
    }
  };

  render() {
    return <div>{this.queryInput()}</div>;
  }
}

export default FieldSelector;
