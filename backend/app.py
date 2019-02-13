# [Flask]
from flask import Flask
from flask_mail import Mail

# [App]
from . import config, db, io
from .routes.dafault import DEFAULT

# [Python]
import logging, os


logger = logging.getLogger(__name__)
mail = Mail()


def create_app(config_name):
    """Creates a new Flask application and initialize application."""

    # Default application
    app = Flask(__name__, static_url_path="")
    
    # Import config options from config.py
    app.config.from_object(config.config[config_name])

    # SET URL MAPPINGS TO BE NON STRICT
    app.url_map.strict_slashes = False
    
    # SET APPLICATION SETTINGS
    app.secret_key = app.config["SECRET_KEY"]
    app.appname = app.config["APP_NAME"]
    app.version = app.config["VERSION"]
    app.support_email = app.config["SUPPORT_EMAIL"]
    
    app.static_folder = '../frontend/build'
    
    # Setup flask mailing server
    mail.init_app(app)

    # Register application routes
    app.register_blueprint(DEFAULT)

    register_extensions(app)
    
    # Initialize flask io to be used
    io.init_app(app)

    return app


def register_extensions(app):
    """Register Flask extensions."""
    db.init_app(app)
    migrate.init_app(app, db)


def register_blueprints(app):
    """Register bundle views."""
    
    # disable strict_slashes on all routes by default
    if not app.config.get('STRICT_SLASHES', False):
        app.url_map.strict_slashes = False

    # register blueprints
    for bundle in app.bundles:
        for blueprint in bundle.blueprints:
            # rstrip '/' off url_prefix because views should be declaring their
            # routes beginning with '/', and if url_prefix ends with '/', routes
            # will end up looking like '/prefix//endpoint', which is no good
            url_prefix = (blueprint.url_prefix or '').rstrip('/')
            app.register_blueprint(blueprint, url_prefix=url_prefix)
