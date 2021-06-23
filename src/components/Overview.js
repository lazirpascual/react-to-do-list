import React from "react";

const Overview = (props) => {
  const { tasks, deleteTask, updateTask } = props;

  const taskList = tasks.map((task) => (
    <ul>
      <input
        type="text"
        value={task.text}
        onChange={(e) => updateTask(e.target.value, task.id)}
        key={task.id}
      />
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </ul>
  ));

  return <div>{taskList}</div>;
};

export default Overview;
