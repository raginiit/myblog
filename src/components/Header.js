import React from "react";
import { Badge, Divider, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          Blogging
        </Typography>

        <IconButton color=" inherit">
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="primary">
          <AccountCircleIcon />
        </IconButton>

        <Divider />
      </Toolbar>
    </>
  );
}

export default Header;
