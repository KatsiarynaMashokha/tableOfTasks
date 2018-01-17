import React, { Component } from "react";
import Table from "./Table";
import getAllTasks from "./TasksCall";

class AllTasks extends Component {
  state = { allTasks: [] };
  componentDidMount() {
    getAllTasks().then(
      response => this.setState({ allTasks: response }),
      error => console.log(error)
    );
  }

  render() {
    return (
      <div>
        <Table totalTasks={this.state.allTasks} />
      </div>
    );
  }
}

export default AllTasks;
