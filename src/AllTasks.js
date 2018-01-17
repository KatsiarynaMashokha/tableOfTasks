import React, { Component } from "react";
import Table from "./Table";

class AllTasks extends Component {
  state = { allTasks: [] };
  componentDidMount() {
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = "https://jsonplaceholder.typicode.com/todos";
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
    promise.then(
      response => this.setState({ allTasks: JSON.parse(response) }),
      error => console.log(error)
    );
  }

  render() {
    return (
      <div>
        <Table totalTasks={this.state.allTasks} />
        {/* {this.state.allTasks.map(task => <TableRow key={task.id} {...task} />)} */}
      </div>
    );
  }
}

export default AllTasks;
