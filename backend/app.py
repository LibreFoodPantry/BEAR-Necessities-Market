# [Flask]
from flask import Flask
from flask_mail import Mail

# [App]
from backend.extensions import db, migrate, jwt, cors
from backend.config import ProductionConfig
from backend.routes import DEFAULT, USERS
from backend import commands
from backend import models

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
    
    # Setup flask mailing server
    mail.init_app(app)

    register_blueprints(app)
    register_extensions(app)
    register_commands(app)
    

    return app


def register_extensions(app):
    """Register Flask extensions."""
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)


def register_blueprints(app):
    """Register Flask blueprints."""
    origins = app.config.get('CORS_ORIGIN_WHITELIST', '*')
    cors.init_app(DEFAULT, origins=origins)
    cors.init_app(USERS, origins=origins)

    app.register_blueprint(DEFAULT)
    app.register_blueprint(USERS)


def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.lint)
    app.cli.add_command(commands.clean)
