import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import ExampleApp from './containers/exampleContainer';
import LoginPage from './containers/loginPage';
import NotFoundPage from "./containers/NotFoundPage";


export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="example" component={ExampleApp}/>

    <Route path="/" component={App}>
    <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);