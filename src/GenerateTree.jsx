import React, { Component } from "react";
import FieldSelector from "./components/FieldSelector";
export class GenerateTree extends Component {
  createTree = (data, keyValue, level) => {
    var child = [];
    if (typeof data === "object") {
      child.push(
        <div key={keyValue}>
          Level: {level} {keyValue}
        </div>
      );
      for (var key in data) {
        child.push(
          <div key={key}>{this.createTree(data[key], key, level + 1)}</div>
        );
      }
    } else {
      child.push(
        <div key={keyValue}>
          <FieldSelector keyval={keyValue} data={data} level={level} />
        </div>
      );
    }
    return child;
  };

  render() {
    return <div>{this.createTree(this.props.data, "", 0)}</div>;
  }
}

export default GenerateTree;
