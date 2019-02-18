# Welcome to BEAR-Necessities-Market
[![GitHub license](https://img.shields.io/badge/license-GPL%20V3-blue.svg)](https://github.com/LibreFoodPantry/BEAR-Necessities-Market/blob/master/LICENSE.md)
[![Build Status]()

## [React v16.8.1](https://facebook.github.io/react/) Frontend
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

## [Flask v1.0.2](http://flask.pocoo.org/) Backend

- [SQLAlchemy](http://docs.sqlalchemy.org/en/rel_1_1/) ORM with [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org/2.2/) and migrations provided by [Flask-Alembic](https://flask-alembic.readthedocs.io/en/stable/)
- RESTful APIs provided by a customized integration between [Flask-RESTful](http://flask-restful.readthedocs.io/en/latest/) and [Flask-Marshmallow](http://flask-marshmallow.readthedocs.io/en/latest/)
- [Flask-Security](https://flask-security.readthedocs.io/en/latest/) provides authentication, authorization, registration and change/forgot password functionality
   - User session management via [Flask-Login](https://flask-login.readthedocs.io/en/latest/)
   - User permissions and roles via [Flask-Principal](https://pythonhosted.org/Flask-Principal/)
   - Secrets encryption via [passlib](https://passlib.readthedocs.io/en/stable/) and [itsdangerous](https://pythonhosted.org/itsdangerous/)
   - CSRF protection via [Flask-WTF](https://flask-wtf.readthedocs.io/en/stable/)
- [Celery](http://www.celeryproject.org/) for asynchronous tasks, such as sending emails via [Flask-Mail](https://pythonhosted.org/Flask-Mail/)

The backend is structured using the [Application Factory Pattern](http://flask.pocoo.org/docs/1.0/patterns/appfactories/), in conjunction with a little bit of declarative configuration in `backend/config.py` (for ordered registration of extensions, and auto-detection of views, models, serializers, model admins and cli commands). The entry point is the `create_app()` method in `backend/app.py` (`wsgi.py` in production).


# Requirements & Global Environment setup

* git bash
* python 3.5+
* pip
* npm -- latest
* node -- latest
* yarn
* virtualenv


First things first, if you are using Windows, install [git bash](https://gitforwindows.org/)

If you are on MAC (Best OS in the world) just open terminal and you are all set to go.


Install Python [3.5+](https://www.python.org/downloads/)
    After download, verify your python version by running: `$ python --version`


Check to see if you have pip by running: `$ pip --version`
If you do not have pip, follow the steps below:


    Install pip (MAC):
    
    $ sudo easy_install pip
    
    
    Install pip (WINDOWS):
    
    $ python -m pip install --upgrade pip


Install [Node & NPM (Latest versions)](https://nodejs.org/en/download/)
Verify you have node ^8.10.0: `$ node --version`
Verify you have npm ^5.6.0: `$ npm -v`
    

Install Yarn package manager

If you are on Mac:
* Install homebrew: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* `$ brew install yarn`   
* Close and re open terminal
* Run `$ yarn --version` 


If you are on Windows:
* Install yarn from: [Yarn Downloads](https://yarnpkg.com/en/)
* After install close and reopen bash terminal



Install virtualenv:
`$ pip install virtualenv`


# Application Download & Installation

```
$ git clone https://github.com/LibreFoodPantry/BEAR-Necessities-Market.git
$ cd BEAR-Necessities-Market
$ virtualenv env --python=python3.6

ACTIVATE_MAC_ENV:
$ source env/bin/activate

ACTIVATE_WINDOWS_ENV:
$ cd env/Scripts
$ ./activate

--> Install server dependencies
$ pip install -r requirements.txt --no-cache-dir

--> Tell Flask to run the manage.py with $ flask
$ export FLASK_APP=manage.py

--> Run db migrations
$ flask db upgrade

--> Start backend server
$ flask run

--> Open a second terminal window
--> Activate your virtualenv for this terminal window
--> Follow ACTIVATE_MAC_ENV or ACTIVATE_WINDOWS_ENV

--> Setup front end react server
$ cd BEAR-Necessities-Market/frontend

--> Verify your node and npm versions are correct
$ node --version
$ npm -v

--> If versions are all good, install node_modules with yarn
$ yarn install

--> The watch flag allows the systems to listen for changes and rebuild the application
$ yarn run build --watch 


NAVIGATE TO localhost:5000 on your web browser and you should see the application running.
```

## Running Flask Unittests
```
$ cd BEAR-Necessities-Market/backend
$ flask test
```

## Running React E2E tests
```
$ cd BEAR-Necessities-Market/frontend
$ yarn test
```


## LIST OF YARN COMMANDS

* `yarn lint` checks the code style.
* `yarn linc` is like yarn lint but faster because it only checks files that differ in your branch.
* `yarn test` runs the complete test suite.
* `yarn test --watch` runs an interactive test watcher.
* `yarn test` <pattern> runs tests with matching filenames.
* `yarn test-prod` runs tests in the production environment. It supports all the same options as yarn test.
* `yarn debug-test` is just like yarn test but with a debugger. Open chrome://inspect and press “Inspect”.
* `yarn flow` runs the Flow typechecks.
* `yarn build` creates a build folder with all the packages.
