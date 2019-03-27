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

import Home from "./containers/home/Home";
import Dashboard from "./containers/Dashboard";
import Users from "./containers/Users";
import Signin from "./containers/Signin";

import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";

const NotFound = () => {
  return <div>NotFound</div>;
};

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <AdminLayout>
          <Component {...matchProps} />
        </AdminLayout>
      )}
    />
  );
};

const MainRoute = ({ component: Component, ...rest }) => {
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
                <AdminRoute path="/dashboard" component={Dashboard} />
                <AdminRoute path="/users" component={Users} />
                <Route path="/signin" component={Signin} />
                <Route path="/adminlogin" render={() => <Redirect to="/dashboard" />} />
                <Route path="/" render={() => <Redirect to="/dashboard" />} />
                <MainRoute component={NotFound} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/studentlogin" render={() => <div>The Order Placement page is not yet implemented. </div>} />
                <Route path="/adminlogin" component={Signin}/>
                <MainRoute exact path="/" component={Home} />
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
