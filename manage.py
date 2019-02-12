# [Flask]
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

# [App]
from backend import db
from backend.app import create_app

# [Python]
import os


app = create_app(os.getenv('FLASK_CONFIG') or 'default')
migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

if __name__ == "__main__":
    manager.run()
