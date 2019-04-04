import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import MainHeader from "../components/MainHeader";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit * 9,
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 7,
    overflowX: "hidden"
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class MainLayout extends Component {

  state =  {
    open: false
  };

  handleToggleDrawer = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const { classes, children } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <MainHeader />
          <Grid container justify="center" alignItems="center" spacing={16}>
            <main className={classNames(classes.content, {[classes.contentShift]: this.state.open})}>
              {children}
            </main>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {

};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(MainLayout));
