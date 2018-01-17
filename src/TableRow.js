import React, { Component } from "react";
import "./styles.css";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.userId}</td>
        <td>{this.props.title}</td>
        <td>{this.props.completed}</td>
      </tr>
    );
  }
}

export default TableRow;
