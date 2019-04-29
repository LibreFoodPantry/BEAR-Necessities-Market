from backend.app import create_app
from backend.config import DevelopmentConfig, ProductionConfig

# Determine which development environment to use
CONFIG = ProductionConfig

# Create the app using config environment
app = create_app(CONFIG)

port = int(os.environ.get("FLASK_RUN_PORT", 5000))
app.run(host='0.0.0.0', port=port)
