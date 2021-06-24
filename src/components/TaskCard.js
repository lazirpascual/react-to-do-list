import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function TaskCard(props) {
  const { task, deleteTask, updateTask, updateDescription } = props;
  return (
    <div>
      <Card variant="Media">
        <CardHeader
          action={
            <IconButton onClick={() => deleteTask(task.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={
            <TextField
              value={task.text}
              label="Task"
              onChange={(e) => updateTask(e.target.value, task.id)}
              key={task.id}
              type="text"
              variant="outlined"
              color="secondary"
            ></TextField>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {
              <TextField
                value={task.description}
                label="Description"
                onChange={(e) => updateDescription(e.target.value, task.id)}
                key={task.id}
                type="text"
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
              ></TextField>
            }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
