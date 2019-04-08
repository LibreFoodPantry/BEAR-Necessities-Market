# [Flask]
from flask import Flask
from flask_mail import Mail
from flask_restplus import Api
from flask_sendgrid import SendGrid

# [App]
from backend.extensions import db, migrate, bcrypt, jwt
from backend.config import ProductionConfig
from backend.resources import DEFAULT
from backend import commands
from backend.resources.users import api as users_namespace
from backend.resources.auth import api as auth_namespace

# [Python]
import logging


logger = logging.getLogger(__name__)
#mail = SendGrid(app)


def create_app(config_object=ProductionConfig):
    """Creates a new Flask application and initialize application."""

    # Default application
    app = Flask(__name__, static_url_path="")
    app.config.from_object(config_object)
    #app.config['SENDGRID_API_KEY'] = '' 
    #app.config['SENDGRID_DEFAULT_FROM'] = 'admin@yourdomain.com'
    app.url_map.strict_slashes = False

    app.static_folder = '../frontend/build'
    
    # Let flask know to serve react
    app.register_blueprint(DEFAULT)

    api = Api(app)

    register_namespaces(api)
    register_extensions(app)
    register_commands(app)
    mail = SendGrid(app)
    #create_mail_server(app)
    
    print(app.url_map)
    
    return app


def register_extensions(app: Flask):
    """Register Flask extensions."""
    
    # Register database and models
    with app.app_context():
        db.init_app(app)
        migrate.init_app(app, db)
    
    # Register JWT token auth
    jwt.init_app(app)
    
    # Registering application encryption
    bcrypt.init_app(app)


def register_namespaces(api: Api):
    """Register api resources."""
    api.add_namespace(users_namespace)
    api.add_namespace(auth_namespace)


def register_commands(app: Flask):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.lint)
    app.cli.add_command(commands.clean)
    

def create_mail_server(app: Flask):
    """ Setup flask mailing server """
    #mail.init_app(app)
    #mail.SendGrid(app)
