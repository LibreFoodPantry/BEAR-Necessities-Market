import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab'; // Circular Buttons with icons in them
// import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

// import SigninButtonTypes from '../components/SigninButtonTypes'

const styles = theme => ({
  root: {
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonStyle1: {
    margin: theme.spacing.unit,
    width: 200,
    height: 200,
  },
  input: {
    display: 'none',
  },
});


const Home = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Fab component={Link} color="primary" aria-label="Add" className={classes.buttonStyle1} to="/Studentlogin">
        {/* <AddIcon /> */}
        Student
      </Fab>
      <Fab component={Link} color="primary" aria-label="Add" className={classes.buttonStyle1} to="/adminlogin"> 
        {/* <AddIcon /> */}
        Admin        
      </Fab>

      {/* Below are Normal Buttons, Above are Circle Buttons; Commented out the other style.*/}
      {/* <Button variant="outlined" className={classes.buttonStyle1}>
        Student
      </Button>
      <Button variant="outlined" className={classes.buttonStyle1}>
        Admin
      </Button> */}
    </div>
  )
};


export default withStyles(styles)(Home);
