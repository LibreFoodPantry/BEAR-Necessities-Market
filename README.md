["pantry"](https://thenounproject.com/search/?q=food%20pantry&i=489212#) icon by David Carrero from the [the Noun Project](https://thenounproject.com/)
<p align="center"><img width=18% src="https://github.com/hawzie197/BEAR-Necessities-Market/blob/master/media/logo.png"></p>
<p align="center"><img width=65% src="https://github.com/hawzie197/BEAR-Necessities-Market/blob/master/media/logo-text.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![GitHub license](https://img.shields.io/badge/license-GPL%20V3-blue.svg)](https://github.com/LibreFoodPantry/BEAR-Necessities-Market/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/LibreFoodPantry/BEAR-Necessities-Market.svg?branch=master)](https://travis-ci.com/LibreFoodPantry/BEAR-Necessities-Market)
[![Python 3.6](https://img.shields.io/badge/python-3.6-blue.svg)](https://www.python.org/downloads/release/python-360/)
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)
[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dwyl/hapi-auth-jwt2?targetFile=package.json)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)


## Overview

Some overview description will go here


## Table of Contents

- [Quick Setup](#quick-setup)
- [Tech Stack](#tech-stack)
- [Code Structure](#code-structure)
- [Documentation][documentation]
- [Releases][releases]
- [Discussion](#discussion)
- [License](#license)


### Quick Setup

> Or take a look at our detailed [getting started][getting-started] instructions.

Install required software:
- Install stable version of VirtualBox (5.2 and above are recommended). ([Link](https://www.virtualbox.org/wiki/Downloads))
- Install Vagrant ([Link](https://www.vagrantup.com/downloads.html))

Clone git project:
- `git clone https://github.com/LibreFoodPantry/BEAR-Necessities-Market.git`

Boot up Vagrant:
  ```
  vagrant up
  ```
Go into the Vagrant box:
  ```
  vagrant ssh
  ```
Go into the project directory:
  ```
  cd BEAR-Necessities-Market
  ```
Run the flask application:
  ```
  export FLASK_APP=manage.py
  export SENDGRID_API_KEY="<your api key>"
  export SENDGRID_DEFAULT_FROM="<your default email address>"
  flask db upgrade
  flask run --host=0.0.0.0
  ```
Open another terminal window:
  ```
  # This is in new terminal window.

  vagrant ssh
  cd BEAR-Necessities-Market/frontend
  sudo yarn build

  # Go to http://localhost:8000
  ```

### IMPORTANT: ALL GIT COMMITS MUST BE MADE OUTSIDE OF VAGRANT

## Tech Stack

#### [React v16.8.4](https://facebook.github.io/react/) Frontend
- [material-ui](https://material-ui.com/) for drop in material components
- Material UI is paired with [mateiral-icons](https://material.io/tools/icons/?style=baseline) for easy icon display
- [Recharts](http://recharts.org/en-US/) A D3 charting library built on React components
- [React Router v4](https://reacttraining.com/react-router/web)
- http requests using [axios](https://github.com/axios/axios)
- [Redux](http://redux.js.org/) and [Redux-Form](https://redux-form.com) for handling state and side effects
- [Webpack 3](https://webpack.js.org/) and [Babel 6](https://babeljs.io/)
   - Hot Module Reloading
   - Tree Shaking
   - Code Splitting (asynchronous components via [react-loadable](https://github.com/thejameskyle/react-loadable))

Entry point is at `frontend/src/index.js`.

#### [Flask v1.0.2](http://flask.pocoo.org/) Backend

- [SQLAlchemy](http://docs.sqlalchemy.org/en/rel_1_1/) ORM with [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org/2.2/) and migrations provided by [Flask-Alembic](https://flask-alembic.readthedocs.io/en/stable/)
- RESTful APIs provided by a customized integration between [Flask-RESTful](http://flask-restful.readthedocs.io/en/latest/) and [Flask-Marshmallow](http://flask-marshmallow.readthedocs.io/en/latest/)
- [Flask-Security](https://flask-security.readthedocs.io/en/latest/) provides authentication, authorization, registration and change/forgot password functionality
   - User session management via [Flask-Login](https://flask-login.readthedocs.io/en/latest/)
   - User permissions and roles via [Flask-Principal](https://pythonhosted.org/Flask-Principal/)
   - Secrets encryption via [passlib](https://passlib.readthedocs.io/en/stable/) and [itsdangerous](https://pythonhosted.org/itsdangerous/)
   - CSRF protection via [Flask-WTF](https://flask-wtf.readthedocs.io/en/stable/)
- [Celery](http://www.celeryproject.org/) for asynchronous tasks, such as sending emails via [Flask-Mail](https://pythonhosted.org/Flask-Mail/)

The backend is structured using the [Application Factory Pattern](http://flask.pocoo.org/docs/1.0/patterns/appfactories/), in conjunction with a little bit of declarative configuration in `backend/config.py` (for ordered registration of extensions, and auto-detection of views, models, serializers, model admins and cli commands). The entry point is the `create_app()` method in `backend/app.py` (`wsgi.py` in production).


#### SMTP (Emailing)

The BEAR-Necessities-Market application uses [sendgrid][sendgrid] for our smtp server and customer engagement platform.


#### Deployment

The BEAR-Necessities-Market application uses [Heroku][heroku] to deploy, manage, and scale quickly and cost efficiently


## Code Structure

```bash
.
├── CHANGELOG.md
│      // Application releasing log
├── LICENSE
│      // Platform license
├── README.md
│      // Initial entry point for documentation
├── backend
│   ├── app.py
│   │      // Flask app definition
│   ├── commands.py
│   │      // Extra flask commands declarations
│   ├── config.py
│   │      // Database/application config
│   ├── extensions.py
│   │      // Module for declaring flask extensions (e.g. JWT)
│   ├── models
│   │      // Flask models (ORM) python classes for database mapping
│   ├── resources
│   │      // RESTful Routes
│   └── utils
│          // Custom defined utilities files
├── docs
│      // Documentation files
│
├── frontend
│   ├── build
│   │      // Production build, entrypoint at build/index.html
│   │  
│   ├── package.json
│   │      // React dependencies list
│
│   ├── public
│   │   ├── index.html
│   │   │      // React application entrypoint at id="root"
│   ├── src
│   │   ├── _actions
│   │   │      // dispatch server calls and call reducers
│   │   ├── _constants
│   │   │      // Stylesheets & action types
│   │   ├── _helpers
│   │   │      // Reusable frontend helper methods
│   │   ├── _reducers
│   │   │      // State modifiers
│   │   ├── _services
│   │   │      // API calls (http requests)
│   │   ├── _store
│   │   │      // Application state tree
│   │   ├── components
│   │   │      // Core reusable components
│   │   ├── containers
│   │   │      // Main application components
│   │   ├── layouts
│   │   │      // Application layouts
│   ├── tests
│          // Frontend e2e tests
│
├── manage.py
│      // Flask app entry point
│
├── media
│      // media file storage
│
├── migrations
│      // Database migration tracking
│
├── requirements.txt
│      // frozen dependencies
│
├── requirements-to-freeze.txt
│      // direct backend application dependencies list
│
├── tests
│      // Backend unit & functional tests
│
└── wsgi.py
       // Production backend entrypoint

```


### Discussion

Say hello in our [Google Group](https://groups.google.com/forum/#!forum/librefoodpantry)
or email us at: librefoodpantry@googlegroups.com



### License

[GPL-3.0](./LICENSE)


[getting-started]: ./docs/getting-setup.md
[documentation]: ./docs/documentation.md
[node]: https://nodejs.org/
[python]: https://www.python.org/downloads/
[releases]: ./CHANGELOG.md
[sendgrid]: https://sendgrid.com/?opt=1
[heroku]: https://www.heroku.com/
