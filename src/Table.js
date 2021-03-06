import React from "react";
import TableRow from "./TableRow";

const Table = props => {
  return (
    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
      <thead style={{ border: "1px solid black" }}>
        <tr style={tStyle}>
          <th style={tStyle}> # </th>
          <th style={tStyle}> User id </th>
          <th style={tStyle}> Title</th>
          <th style={tStyle}> Completed?</th>
        </tr>
      </thead>
      <tbody>
        {props.totalTasks.map(task => <TableRow key={task.id} {...task.toObject()} />)}
      </tbody>
    </table>
  );
};

let tStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  textTransform: "uppercase",
  border: "1px solid black",
  padding: "3px"
};

export default Table;
