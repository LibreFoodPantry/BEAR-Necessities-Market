# Welcome to BEAR-Necessities-Market

## [React v16](https://facebook.github.io/react/) Frontend

The frontend is heavily inspired by [react boilerplate](https://github.com/react-boilerplate/react-boilerplate), and indeed borrows a good chunk of boilerplate from it.

- [React Router v4](https://reacttraining.com/react-router/web)
- [Redux](http://redux.js.org/), [Redux-Saga](https://redux-saga.js.org/) and [Redux-Form](https://redux-form.com) for handling state and side effects
- [Webpack 3](https://webpack.js.org/) and [Babel 6](https://babeljs.io/)
   - Hot Module Reloading
   - Tree Shaking
   - Code Splitting (asynchronous components via [react-loadable](https://github.com/thejameskyle/react-loadable))

Entry point is at `frontend/src/index.js`.

## [Flask](http://flask.pocoo.org/) Backend

- [SQLAlchemy](http://docs.sqlalchemy.org/en/rel_1_1/) ORM with [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org/2.2/) and migrations provided by [Flask-Alembic](https://flask-alembic.readthedocs.io/en/stable/)
- RESTful APIs provided by a customized integration between [Flask-RESTful](http://flask-restful.readthedocs.io/en/latest/) and [Flask-Marshmallow](http://flask-marshmallow.readthedocs.io/en/latest/)
- [Flask-Security](https://flask-security.readthedocs.io/en/latest/) provides authentication, authorization, registration and change/forgot password functionality
   - User session management via [Flask-Login](https://flask-login.readthedocs.io/en/latest/)
   - User permissions and roles via [Flask-Principal](https://pythonhosted.org/Flask-Principal/)
   - Secrets encryption via [passlib](https://passlib.readthedocs.io/en/stable/) and [itsdangerous](https://pythonhosted.org/itsdangerous/)
   - CSRF protection via [Flask-WTF](https://flask-wtf.readthedocs.io/en/stable/)
- [Flask-Admin](https://flask-admin.readthedocs.io/en/latest/) integrated for painless model CRUD administration
- [Flask-Session](http://pythonhosted.org/Flask-Session/) for server-side sessions
- [Celery](http://www.celeryproject.org/) for asynchronous tasks, such as sending emails via [Flask-Mail](https://pythonhosted.org/Flask-Mail/)

The backend is structured using the [Application Factory Pattern](http://flask.pocoo.org/docs/0.12/patterns/appfactories/), in conjunction with a little bit of declarative configuration in `backend/config.py` (for ordered registration of extensions, and auto-detection of views, models, serializers, model admins and cli commands). The entry point is the `create_app()` method in `backend/app.py` (`wsgi.py` in production).


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
Verify you have node >= 8.0.0: `$ node --version`
Verify you have npm >= 5.0.0: `$ npm -v`
    

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
$ git clone [GITHUB REPO LINK]
$ cd libre-food-pantry
$ virtualenv env

ACTIVATE_MAC_ENV:
$ source env/bin/activate

ACTIVATE_WINDOWS_ENV:
$ cd env/Scripts
$ ./activate

--> Install server dependencies
$ pip install -r requirements.txt

--> Set database url in your local environment
--> backend/config.py/DevelopmentConfig.DEV_DATABASE_URL
$ export DEV_DATABASE_URL="sqlite:///galacticempire"

--> Run db migrations
$ python manage.py db init
$ python manage.py db upgrade
$ python manage.py db migrate

--> Start backend server
$ python manage.py runserver

--> Open a second terminal window
--> follow steps to start virtual env again

--> Setup front end react server
$ cd BEAR-Necessities-Market/frontend
$ nvm use 10
$ yarn install

--> The watch flag allows the systems to listen for changes and rebuild the application
$ yarn run build --watch 


NAVIGATE TO localhost:5000 on your web browser and you should see the application running.
```

## Running Flask Unittests
```
$ cd BEAR-Necessities-Market/backend
$ python manage.py test
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
