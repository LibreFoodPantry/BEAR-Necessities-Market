import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  toolbarRoot: {
    paddingRight: 24
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  title: {
    flexGrow: 1
  }
});

const MainHeader = props => {

  const { classes, handleToggleDrawer } = props;

  return (
      <AppBar position="fixed">
        <Toolbar disableGutters={true} classes={{ root: classes.toolbarRoot }}>

          {/* MENU TOGGLE */}
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleToggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          {/* TITLE */}
          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>

          {/* NOTIFICATIONS */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            id="simple-menu"
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>

          {/* PROFILE */}
          <IconButton onClick={props.logout} color="inherit">
            <PersonIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
  );
};

export default withStyles(styles)(MainHeader);
