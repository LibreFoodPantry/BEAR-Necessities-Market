from flask.helpers import get_debug_flag
from app import create_app
from config import DevelopmentConfig, ProductionConfig

# Determine which development environment to use
CONFIG = DevelopmentConfig if get_debug_flag() else ProductionConfig

# Create the app using config environment
if __name__ == '__main__':
    create_app(CONFIG)
