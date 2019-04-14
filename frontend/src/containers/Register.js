import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Typography from "@material-ui/core/Typography";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { userActions } from "../_actions";

const styles = () => ({
  root: {
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '350px',
    minHeight: '320px',
    height: 'auto'
  },
  grid: {
    padding: "20px",
    display: "grid",
    height: "inherit"
  },
  buttons: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    paddingTop: "20px"
  },
  inputRoot: {
    width: "100%"
  },
  progress: {
    width: "100%"
  },
  forgotPassword: {
    color: '#1a73e8',
    lineHeight: '20px',
    display: 'inline-block',
    fontWeight: '500',
    fontFamily: 'Google Sans, Noto Sans Myanmar UI, arial, sans-serif'
  },
  submitButton: {
    marginLeft: '104px'
  },
  errorText: {
    color: '#cc0000',
    width: '100%',
    paddingTop: '8px',
    fontFamily: 'Google Sans, Noto Sans Myanmar UI, arial, sans-serif'
  }
});
class RegisterPage extends Component {
    constructor(props) {
        super(props);

        // Initialize class methods
        // Reference: https://stackoverflow.com/questions/35098324/react-form-component-onsubmit-handler-not-working
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /**
    * On submission, check to make sure credentials are not null.
    * If valid ==> login
    */
    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {email, password} = this.state;
        const {dispatch} = this.props;

    dispatch(userActions.register(email, password));
  }
  /**
   * When the input values change, update the
   * credentials in state.
   */
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

render() {

const { email, password, submitted } = this.state;
const { classes, loggingIn, loginFailed } = this.props;

return (
    <div className={classes.root}>

      <Card className={classes.card}>

        {/* Loader to give user feedback on submit */}
        { loggingIn && submitted &&
          <LinearProgress className={classes.progress} />
        }

        <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            className={classes.grid}
        >
          <div>
            <Typography
              align="left"
              headlineMapping={{ display: "h1" }}
              variant="headline"
            >
              BEAR-Necessities-Market
            </Typography>
            <Typography
              align="left"
              headlineMapping={{ display: "h1" }}
              variant="title"
            >
              Admin Register
            </Typography>
          </div>

          {/* Loader to give user feedback on submit */}
          { loginFailed &&
            <Typography
              className={classes.errorText}
              variant="subtitle1"
              align="center"
            >
              Invalid email or password
            </Typography>
          }

          <TextValidator
            type="email"
            label="Email"
            className={classes.inputRoot}
            name="email"
            value={email}
            onChange={this.handleChange}
            margin="normal"
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
          <TextValidator
            type="password"
            label="Password"
            className={classes.inputRoot}
            name="password"
            value={password}
            onChange={this.handleChange}
            margin="normal"
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <div className={classes.buttons}>

            <div className={classes.forgotPassword}>
            //double check the page is called home
              <Link to="/home">Go Back</Link>
            </div>

            <Button
              type="submit"
              disabled={submitted && loggingIn}
              color="primary"
              variant="contained"
              className={classes.submitButton}
            >
              Register
            </Button>
          </div>
        </ValidatorForm>
      </Card>
    </div>
)
}
}
function mapStateToProps(state) {
  const { loggingIn, loginFailed } = state.auth;
  return {
      loggingIn, loginFailed
  };
}
export default connect(mapStateToProps)(withStyles(styles)(RegisterPage));
