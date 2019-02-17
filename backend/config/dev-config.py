import os
import config

DEBUG = True
ENV = 'development'
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(config.basedir, 'data-dev.sqlite')