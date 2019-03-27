# [Flask]
from flask import Flask
from flask_mail import Mail
from flask_restplus import Api

# [App]
from backend.extensions import db, migrate, jwt, bcrypt
from backend.config import ProductionConfig
from backend.resources import DEFAULT
from backend import commands

from backend.resources.users import api as users_namespace
from backend.resources.auth import api as auth_namespace

# [Python]
import logging


logger = logging.getLogger(__name__)
mail = Mail()


def create_app(config_object=ProductionConfig):
    """Creates a new Flask application and initialize application."""

    # Default application
    app = Flask(__name__, static_url_path="")
    app.config.from_object(config_object)
    app.url_map.strict_slashes = False

    app.static_folder = '../frontend/build'
    
    # Let flask know to serve react
    app.register_blueprint(DEFAULT)

    api = Api(app)

    register_namespaces(api)
    register_extensions(app)
    register_commands(app)
    create_mail_server(app)
    
    return app


def register_extensions(app):
    """Register Flask extensions."""
    
    # Register database and models
    with app.app_context():
        db.init_app(app)
        migrate.init_app(app, db)
    
    # Register JWT helper
    jwt.init_app(app)
    bcrypt.init_app(app)


def register_namespaces(api):
    """Register api resources."""
    api.add_namespace(users_namespace)
    api.add_namespace(auth_namespace)


def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.lint)
    app.cli.add_command(commands.clean)
    

def create_mail_server(app):
    """ Setup flask mailing server """
    mail.init_app(app)
