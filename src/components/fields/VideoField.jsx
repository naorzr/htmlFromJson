import React, { Component } from "react";

export class VideoField extends Component {
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
          <div className="col-0">
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <iframe
              src={this.state.inputValue}
              width="500"
              height="375"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoField;
