import os
from config import core

TESTING = True
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(core.basedir, 'data-test.sqlite')