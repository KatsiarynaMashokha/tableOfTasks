import React, { Component } from "react";
import Table from "./Table";
import getAllTasks from "./TasksCall";
import Immutable from 'immutable';

class AllTasks extends Component {
  state = { allTasks: new Immutable.List() };
  componentDidMount() {
    getAllTasks().then(
      response => {
        const NewTaskList = new Immutable.List(response.map(task => new TaskRecord(task)));
        console.log(NewTaskList.toJSON());
        this.setState({ allTasks: NewTaskList})
      },
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


const TaskRecord = new Immutable.Record({
  id: null,
  userId: null,
  title: null,
  completed: null
});

export default AllTasks;
