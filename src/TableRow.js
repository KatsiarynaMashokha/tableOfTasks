import React, { Component } from "react";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td style={tStyle}>{this.props.id}</td>
        <td style={tStyle}>{this.props.userId}</td>
        <td style={tStyle}>{this.props.title}</td>
        <td style={tStyle}>{this.props.completed.toString()}</td>
      </tr>
    );
  }
}

let tStyle = {
  border: "1px solid black",
  padding: "3px"
};

export default TableRow;
