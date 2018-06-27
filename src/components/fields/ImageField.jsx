import React, { Component } from "react";

export class ImageField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeValue: true,
      inputValue: this.props.data
    };
  }
  handleChange = e => {
    this.setState({ inputValue: e.target.value, changeValue: false });
    window.sessionStorage.setItem(
      this.props.keyValue + "-level-" + this.props.level,
      this.state.inputValue
    );
  };
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
          <div className="col-1">
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={this.state.inputValue} alt="Unable To Display Picture" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageField;
