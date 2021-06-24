import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import { purple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[200],
  },
  description: {
    paddingLeft: theme.spacing(3),
  },
}));

export default function TaskCard(props) {
  const classes = useStyles();
  const { task, deleteTask, updateTask, updateDescription } = props;
  return (
    <div>
      <Card variant="Media">
        <CardHeader
          avatar={
            <Avatar className={classes.purple}>
              <FolderIcon />
            </Avatar>
          }
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
              variant="standard"
              color="secondary"
            ></TextField>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {
              <TextField
                label="Description"
                value={task.description}
                onChange={(e) => updateDescription(e.target.value, task.id)}
                key={task.id}
                type="text"
                variant="filled"
                color="secondary"
                multiline
                fullWidth
                rows={4}
              ></TextField>
            }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
