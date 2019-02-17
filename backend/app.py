# [Flask]
from flask import Flask
from flask_mail import Mail
from flask_jwt import JWT
from flask_restful import Api

# [App]
from backend.extensions import db, migrate, jwt
from backend.resources import DEFAULT
from backend import commands
from backend.resources.users import UsersDetail, UsersList


mail = Mail()


# Default application
app = Flask(__name__)
app.config.from_envvar('SETTINGS')
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


def register_extensions(app):
    """Register Flask extensions."""
    
    # Register database and models
    with app.app_context():
        db.init_app(app)
        migrate.init_app(app, db)
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
