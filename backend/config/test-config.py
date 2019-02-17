import os
import config

TESTING = True
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(config.basedir, 'data-test.sqlite')