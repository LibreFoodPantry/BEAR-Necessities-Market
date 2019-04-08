# [App]
from backend.app import create_app, db
from backend.models.users import UserModel
from backend.models.order import OrdersModel
from backend.config import TestingConfig

# [Python]
import pytest


@pytest.fixture(scope='module')
def new_user():
    user = UserModel('mhawes24@gmail.com', 'some_password')
    return user


@pytest.fixture(scope='module')
def new_order():
    order = OrdersModel('test@email.com')
    return order

    
@pytest.yield_fixture(scope='session')
def app():
    flask_app = create_app(TestingConfig)
    
    # Establish an application context before running the tests.
    ctx = flask_app.app_context()
    ctx.push()
    
    yield flask_app


@pytest.yield_fixture(scope='session')
def client(app):
    with app.test_client() as client:
        yield client


@pytest.fixture(scope='module')
def init_database():
    # Create the database and the database table
    db.create_all()

    # Insert user data
    user1 = UserModel('mhawes244455@gmail.com', 'password1')
    user2 = UserModel('hawes_family@gmail.com', 'password2')
    user2 = UserModel('testuser@gmail.com', 'password')
    db.session.add(user1)
    db.session.add(user2)

    # Commit the changes for the users
    db.session.commit()

    yield db  # This is where the testing happens!

    db.drop_all()
