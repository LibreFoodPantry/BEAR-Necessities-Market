import os
from config import core

DEBUG = True
ENV = 'development'
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(core.basedir, 'data-dev.sqlite')