import React, {Component} from "react";
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
import {connect} from "react-redux";
import { userActions } from "../../_actions";

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

class AdminHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };

  }

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  logout = event => {
    this.setState({anchorEl: null});
    const {dispatch} = this.props;
    dispatch(userActions.logout());
  };

  render() {
    const {anchorEl} = this.state;
    const {classes, handleToggleDrawer} = this.props;

    return (
      <AppBar position="fixed">
        <Toolbar disableGutters={true} classes={{root: classes.toolbarRoot}}>

          {/* MENU TOGGLE */}
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleToggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon/>
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
              <NotificationsIcon/>
            </Badge>
          </IconButton>
          <Menu
            id="simple-menu"
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

          {/* PROFILE */}
          <IconButton
            color="inherit"
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <PersonIcon/>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.logout}>Logout</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
}

export default connect(mapStateToProps)(withStyles(styles)(AdminHeader));
