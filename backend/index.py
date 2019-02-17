""" Default routes """
import os
import sys
import logger

# [Flask]
from flask import Blueprint

# [App]
from config import config

ROOT_PATH = os.path.dirname(os.path.realpath(__file__))
os.environ.update({'ROOT_PATH': ROOT_PATH})
sys.path.append(os.path.join(ROOT_PATH, 'backend'))

# Create a logger object to log the info and debug
LOG = logger.get_root_logger(os.environ.get(
    'ROOT_LOGGER', 'root'), filename=os.path.join(ROOT_PATH, 'output.log'))

# Port variable to run the server on.
PORT = os.environ.get('PORT')

DEFAULT = Blueprint('default', __name__, static_folder=config.STATIC_FOLDER)


@DEFAULT.route('/')
def index():
    """ Default route. Redirect to static's index.html """
    return DEFAULT.send_static_file('index.html')

if __name__ == '__main__':
    LOG.info('running environment: %s', os.environ.get('ENV'))
    app.config['DEBUG'] = os.environ.get('ENV') == 'development' # Debug mode if development env
    app.run(host='0.0.0.0', port=int(PORT)) # Run the app