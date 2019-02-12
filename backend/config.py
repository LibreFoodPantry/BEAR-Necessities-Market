import os

"""
The following environment variables are suggested to be set.
If the database URLs are not set, the application will default
to a sqlite database stored in the root of the application
directory named data-x.sqlite where x is the current config name.

SECRET_KEY
DEV_DATABASE_URL
PRODUCTION_DATABASE_URL
FLASK_CONFIG (will be development, testing, production or default)
"""

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    APP_NAME = "Libre Food Bank"
    APP_ID = ""
    SUPPORT_EMAIL = ""
    VERSION = "1.0.0"
    MAIL_SERVER = ""
    SECRET_KEY = os.environ.get('SECRET_KEY') or '4c4v4f4vf44$'
    STATIC_FOLDER = '../../frontend/build'
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')


class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data-test.sqlite')


class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.environ.get('PRODUCTION_DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data.sqlite')


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
