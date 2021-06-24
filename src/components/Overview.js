import React from "react";
import TaskCard from "./TaskCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Overview = (props) => {
  const { tasks, deleteTask, updateTask, updateDescription } = props;

  const taskList = tasks.map((task) => (
    <Grid item xs={12} md={6} lg={4} key={task.id}>
      <TaskCard
        task={task}
        deleteTask={deleteTask}
        updateTask={updateTask}
        updateDescription={updateDescription}
      />
    </Grid>
  ));

  return (
    <Container>
      <Grid container direction="row" spacing={5}>
        {taskList}
      </Grid>
    </Container>
  );
};

export default Overview;
