import React, {Component} from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import Users from "./containers/Users";
import Signin from "./containers/Signin";

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

class App extends Component {
  state = {
    auth: false
  };

  render() {
    const { auth } = this.props;

    return (
      <MuiThemeProvider>
        <CssBaseline />
        <div style={{ height: "100vh" }}>
          <Router>
            {auth.authenticate ? (
              <Switch>
                <DashboardRoute path="/dashboard" component={Dashboard} />
                <DashboardRoute path="/users" component={Users} />
                <Route path="/signin" render={() => <Redirect to="/dashboard" />} />
                <Route path="/studentlogin" render={() => <Redirect to="/dashboard" />} />
                <Route path="/adminlogin" render={() => <Redirect to="/dashboard" />} />
                <Route path="/" render={() => <Redirect to="/dashboard" />} />
                {/* <EmptyRoute path="/" component={Home} /> */}
                <EmptyRoute component={NotFound} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/adminlogin" render={() => <div>The Admin Login Screen is yet to be implemented</div>}/>
                <EmptyRoute exact path="/" component={Home} />
                <Redirect to="/" />
              </Switch>
            )}
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {};

const mapStateToProps = state => {
  return {
    settings: state.settings,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
