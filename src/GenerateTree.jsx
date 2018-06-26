import React, { Component } from "react";
import FieldSelector from "./components/FieldSelector";
import axios from "axios";
export class GenerateTree extends Component {
  constructor(props) {
    super(props);
    this.state = { json: {} };
  }
  fetchJson = () => {
    axios
      .get("https://randomuser.me/api")
      .then(res => {
        this.setState({ json: res });
      })
      .catch(e => console.log(e));
  };
  componentDidMount() {
    this.interval = setInterval(() => this.fetchJson(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createTree = (data, keyValue, level) => {
    var child = [];
    if (typeof data === "object") {
      child.push(
        <li key={keyValue}>
          Level: {level} {keyValue}
        </li>
      );
      for (var key in data) {
        child.push(
          <ul key={key}>{this.createTree(data[key], key, level + 1)}</ul>
        );
      }
    } else {
      child.push(
        <li key={keyValue}>
          <FieldSelector keyValue={keyValue} data={data} level={level} />
        </li>
      );
    }
    return child;
  };

  render() {
    return <ul>{this.createTree(this.state.json, "", 0)}</ul>;
  }
}

export default GenerateTree;
