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
        {props.totalTasks.map(task => <TableRow key={task.id} {...task} />)}
      </tbody>
    </table>
  );
};

let tStyle = {
  border: "1px solid black",
  padding: "3px"
};

export default Table;
