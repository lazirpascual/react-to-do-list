import React from "react";
import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
    },
  ];

  return (
    <div className={classes.root}>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Projects
          </Typography>
        </div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <AddCircleOutlineOutlined color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Create Project" />
          </ListItem>
        </List>
      </Drawer>

      {/* main content */}
      <div className={classes.page}>{children}</div>
    </div>
  );
}
