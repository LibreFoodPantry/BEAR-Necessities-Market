import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    // TODO: Fix bug for when screen is in extreme landscape (ie. Short height, x < 500px) resolution, top part of UI gets cut off.
  },
  headerText: {
    marginRight: '175px',
  },
  buttonStyle1: {
    // width: '100px',
    maxWidth: '200px',
    height: 'auto',
    borderRadius: '50%',
    boxShadow: '2px 4px 10px grey',
    // TODO: Scale icon in button. Bit small at the moment.
  },
  input: {
    display: 'none',
  },
});


const Home = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
    <h1 className={classes.headerText}>
      I am ...
    </h1>
    {/* TODO: Colorize/beautify text */}
    <Link to="/Studentlogin" className={classes.buttonStyle1} style={{margin: '10px'}}>
      <Button className={classes.buttonStyle1}>
        <img src={require("./images/student_btn.png")} alt="Student button" className={classes.buttonStyle1}/>
      </Button>
    </Link>
    
    <Link to="/adminlogin" className={classes.buttonStyle1} style={{margin: '10px'}}>
      <Button className={classes.buttonStyle1}>
        <img src={require("./images/admin_btn.png")} alt="Adminstrator button" className={classes.buttonStyle1}/>
      </Button>
    </Link>

    {/* <Link to="/volunteerlogin"><Button><img src={require("./images/volunteer_btn.png")} alt="Volunteer button" className={classes.buttonStyle1}/></Button></Link> */}
    
    </div>
  )
};


export default withStyles(styles)(Home);
