""" Default routes """

# [Flask]
from flask import Blueprint

# [App]
from ..config import Config


DEFAULT = Blueprint('default', __name__, static_folder=Config.STATIC_FOLDER)


@DEFAULT.route('/')
def index():
    """ Default route. Redirect to static's index.html """
    return DEFAULT.send_static_file('index.html')
