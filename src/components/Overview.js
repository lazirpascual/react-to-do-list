import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Overview = (props) => {
  const { tasks, deleteTask, updateTask } = props;

  const taskList = tasks.map((task) => (
    <ul>
      <TextField
        value={task.text}
        onChange={(e) => updateTask(e.target.value, task.id)}
        key={task.id}
        type="text"
        variant="outlined"
        color="secondary"
      ></TextField>
      <Button
        onClick={() => deleteTask(task.id)}
        color="secondary"
        variant="contained"
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </ul>
  ));

  return <div>{taskList}</div>;
};

export default Overview;
