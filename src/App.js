import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

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
    this.updateDescription = this.updateDescription.bind(this);
  }

  componentDidMount() {
    this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
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
    const updatedTasks = this.state.tasks;
    updatedTasks.forEach((item) => {
      if (item.id === key) {
        item.text = text;
      }
    });
    this.setState({
      tasks: updatedTasks,
    });
  };

  updateDescription = (text, key) => {
    const updatedTasks = this.state.tasks;
    updatedTasks.forEach((item) => {
      if (item.id === key) {
        item.description = text;
      }
    });
    this.setState({
      tasks: updatedTasks,
    });
  };

  saveAllTasks = () => {
    const filteredTasks = this.state.tasks.filter((item) => item);
    this.setState({
      tasks: filteredTasks,
    });
  };

  deleteAllTasks = () => {
    this.setState({
      tasks: [],
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <Container>
        <Grid container>
          <Grid container justify="flex-end" spacing={3}>
            <Grid item>
              <Button
                type="submit"
                onClick={this.saveAllTasks}
                color="primary"
                variant="contained"
                endIcon={<DoneAllIcon />}
              >
                Save All Tasks
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                onClick={this.deleteAllTasks}
                color="default"
                variant="contained"
                endIcon={<DeleteSweepIcon />}
              >
                Delete All Tasks
              </Button>
            </Grid>
          </Grid>
          <Typography
            variant="h3"
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            Create a New Task
          </Typography>
        </Grid>
        <form onSubmit={this.addTask}>
          <Box mt={2} mb={4}>
            <TextField
              onChange={this.handleChangeTask}
              value={task.text}
              label="Task"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            ></TextField>
          </Box>
          <Box mb={6}>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Add Task
            </Button>
          </Box>
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
