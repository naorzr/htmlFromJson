import React, { Component } from "react";

export class NumberField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeValue: true,
      inputValue: this.props.data
    };
  }
  handleChange = e => {
    this.setState({ inputValue: e.target.value, changeValue: false });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-0">
            <i className="fas fa-square" />
          </div>
          <div className="col-1">
            <p>{this.props.keyValue}</p>
          </div>
          <div className="col-1">
            <input
              type="number"
              step="0.1"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NumberField;
