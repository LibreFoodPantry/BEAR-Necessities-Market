import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { userActions } from '../_actions';
import TextField from '@material-ui/core/TextField';


const styles = () => ({
  root: {
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '350px',
    height: '340px'
  },
  grid: {
    padding: "20px",
    display: "grid",
    gridTemplateRows: "85px 1fr 1fr 1fr",
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
  }
});

class LoginPage extends Component {

  constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  /**
   * On submission, check to make sure credentials are not null.
   * If valid ==> login
   * If null ==> Show error message
   */
  handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        } else {
          // Show snackbar with message.
        }
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

    const { email, password } = this.state;
    const { classes } = this.props;

    return (
        <div className={classes.root}>
          <Card className={classes.card}>
            <form name="form" onSubmit={this.handleSubmit} className={classes.grid}>
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
                  Admin Login
                </Typography>
              </div>
              <TextField
                type="email"
                label="Email"
                className={classes.inputRoot}
                name="email"
                value={email}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                type="password"
                label="Password"
                className={classes.inputRoot}
                name="password"
                value={password}
                onChange={this.handleChange}
                margin="normal"
              />
              <div className={classes.buttons}>
                <Button
                  onClick={this.handleSubmit}
                  type="button"
                  color="primary"
                  variant="contained"
                >
                  Signin
                </Button>
              </div>
            </form>
          </Card>
        </div>
    )
  }
}

function mapStateToProps(state) {

}


export default connect(mapStateToProps)(withStyles(styles)(LoginPage));

