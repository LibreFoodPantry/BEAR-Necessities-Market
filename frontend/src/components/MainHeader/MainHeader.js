import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    marginLeft: 12,
    marginRight: 36,
    fontFamily: ("Times New Roman", "Times", "serif")
  },
  navigation: {
    display: "flex",
    flexDirection: "row",
    padding: "2px",
  },

});

const MainHeader = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar disableGutters={true}>
          {/* TITLE */}
          <Typography variant="title" color="inherit" className={classes.title}>
            BEAR NECESSITIES MARKET
          </Typography>

          {/* Navigation */}
          <div className={classes.navigation}>
            <Button variant="h8" color="inherit" >
              HOW IT WORKS
            </Button>
            <Button variant="h8" color="inherit" >
              ABOUT
            </Button>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(MainHeader);
