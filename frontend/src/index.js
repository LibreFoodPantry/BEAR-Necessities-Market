import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './containers/App';
import reset from './constants/css/reset';

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <HashRouter basename="/">
        <Fragment>
            <Provider store={store}>
                <App />
            </Provider>
            <GlobalStyle />
        </Fragment>
    </HashRouter>,
    document.getElementById('root')
);
