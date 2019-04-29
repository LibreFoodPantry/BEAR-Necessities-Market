from backend.app import create_app
from backend.config import DevelopmentConfig, ProductionConfig

# Determine which development environment to use
CONFIG = ProductionConfig

# Create the app using config environment
app = create_app(CONFIG)
