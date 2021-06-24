import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        description: "",
        id: uniqid(),
      },
      tasks: [],
    };

    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  handleChangeTask = (e) => {
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
        description: "",
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

  updateDescription = (text, key) => {
    const tasks = this.state.tasks;
    tasks.forEach((item) => {
      if (item.id === key) {
        item.description = text;
      }
    });
    this.setState({
      tasks: tasks,
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <Container>
        <Typography
          variant="h3"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a New Task
        </Typography>

        <form onSubmit={this.addTask}>
          <TextField
            onChange={this.handleChangeTask}
            value={task.text}
            label="Task"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          ></TextField>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Add Task
          </Button>
        </form>
        <Overview
          tasks={tasks}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
          updateDescription={this.updateDescription}
        />
      </Container>
    );
  }
}

export default App;
