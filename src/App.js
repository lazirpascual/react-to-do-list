import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
      },
      tasks: [],
    };

    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  addTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
      },
    });
  };

  deleteTask = (key) => {
    const filteredTasks = this.state.tasks.filter((item) => item.id !== key);
    this.setState({
      tasks: filteredTasks,
    });
  };

  updateTask = (text, key) => {
    const tasks = this.state.tasks;
    tasks.forEach((item) => {
      if (item.id === key) {
        item.text = text;
      }
    });
    this.setState({
      tasks: tasks,
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.addTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview
          tasks={tasks}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
        />
      </div>
    );
  }
}

export default App;
