import React, { Component } from "react";

export class HeaderField extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-0">
            <i className={"fas fa-square level" + this.props.level} />
          </div>
          <div className="col-1">
            <p>{this.props.keyValue}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderField;
