import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: "80%"
  },
  subtitle: {
    textAlign: "center",
    fontFamily: ("Times New Roman", "Times", "serif")
  },
  buttonStyle: {
    // width: '100px',
    maxWidth: '200px',
    height: 'auto',
    boxShadow: '2px 4px 10px grey',
    // borderRadius: '50%',
    // TODO: Scale icon in button. Bit small at the moment.
  },
  studentButton: {
    color: '#4CAF50',
    '&:hover': {
      color: '#FFA500'
    }
  },
  gridStyle1: {
    padding: '20px'
  }
});

function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12} alignItems="center">
            <Typography variant="h3" className={classes.subtitle}>
              Welcome to Libre Food Pantry
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.gridStyle1} alignItems="center">
            {/* <Grid item xs={6} > */}
              <Link to="/Studentlogin" style={{margin: '10px'}}>
                <Button variant="contained" className={classNames(classes.buttonStyle, classes.studentButton)}>
                  {/* <img src={require("./images/student_btn.png")} alt="Student button" className={classes.buttonStyle1}/> */}                    
                  STUDENT
                </Button>
              </Link>
            {/* </Grid> */}
            {/* <Grid item xs={6}> */}
              <Link to="/adminlogin" style={{margin: '10px'}}>
                <Button variant="contained" color="primary" className={classes.buttonStyle}>
                  {/* <img src={require("./images/admin_btn.png")} alt="Adminstrator button" className={classes.buttonStyle1}/> */}
                  ADMIN
                </Button>
              </Link>
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
