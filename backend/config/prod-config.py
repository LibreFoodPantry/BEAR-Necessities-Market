import os
from config import core

ENV = 'prod'
SQLALCHEMY_DATABASE_URI = os.environ.get('PRODUCTION_DATABASE_URL') or \
    'sqlite:///' + os.path.join(core.basedir, 'data.sqlite')