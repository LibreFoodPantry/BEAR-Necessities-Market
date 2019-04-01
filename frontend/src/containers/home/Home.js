import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { green, orange, grey } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Green = green[500];
const Orange = orange[500];
const White = grey[50];

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  Typography: {
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: '80%',
    minHeight: '100%'
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: 300
  },
  buttonStyle: {
    maxWidth: '200px',
    height: 'auto',
    boxShadow: '2px 4px 10px grey',
  },
  studentButton: {
    backgroundColor: Green,
    color: White,
    '&:hover': {
      backgroundColor: Orange
    }
  },
  adminButton: {
    color: White,
    '&:hover': {
      backgroundColor: Orange
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
        <Grid container direction='column' spacing={24} alignItems='center'>
          <Grid item xs={12} alignItems='center'>
            <Typography variant='h3' className={classes.subtitle}>
              Welcome to Libre Food Pantry
            </Typography>
          </Grid>
          <Grid item xs={12} alignItems='center' padding='20px'>
            <Typography variant='h5'>
              Please Select ...
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.gridStyle1} alignItems='center'>
            <Link to='/Studentlogin' style={{margin: '10px', textDecoration: 'none'}}>
              <Button variant='contained' className={classNames(classes.buttonStyle, classes.studentButton)}>
                  STUDENT  
              </Button>
            </Link>
            <Link to='/adminlogin' style={{margin: '10px', textDecoration: 'none'}}>
              <Button variant='contained' color='primary' className={classNames(classes.buttonStyle, classes.adminButton)}>
                {/* <img src={require('./images/admin_btn.png')} alt='Adminstrator button' className={classes.buttonStyle1}/> */}
                ADMIN
              </Button>
            </Link>
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
