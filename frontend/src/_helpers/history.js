/*
  history is a JavaScript library that lets you easily manage
  session history anywhere JavaScript runs. history abstracts
  away the differences in various environments and provides a
  minimal API that lets you manage the history stack, navigate,
  confirm navigation, and persist state between sessions.

  Reference: https://www.npmjs.com/package/history
*/

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();