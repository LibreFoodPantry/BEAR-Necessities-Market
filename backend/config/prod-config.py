import os
import config

ENV = 'prod'
SQLALCHEMY_DATABASE_URI = os.environ.get('PRODUCTION_DATABASE_URL') or \
    'sqlite:///' + os.path.join(config.basedir, 'data.sqlite')