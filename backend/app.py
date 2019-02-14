# [Flask]
from flask import Flask
from flask_mail import Mail
from flask_jwt import JWT
from flask_restful import Api

# [App]
from backend.extensions import db, migrate, jwt
from backend.config import ProductionConfig
from backend.resources import DEFAULT
from backend import commands
from backend.resources.users import UsersDetail, UsersList

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
    # JWT(app)
    
    register_resources(api)
    register_extensions(app)
    register_commands(app)
    create_mail_server(app)
    
    return app


def register_extensions(app):
    """Register Flask extensions."""
    
    # Register database and models
    with app.app_context():
        db.init_app(app)
        db.create_all()
    
    # Register JWT helper
    jwt.init_app(app)


def register_resources(api):
    """Register api resources."""
    api.add_resource(UsersDetail, '/users/<int:pk>')
    api.add_resource(UsersList, '/users')


def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.lint)
    app.cli.add_command(commands.clean)
    

def create_mail_server(app):
    """ Setup flask mailing server """
    mail.init_app(app)
