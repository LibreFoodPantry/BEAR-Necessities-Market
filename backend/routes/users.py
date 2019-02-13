"""User views."""
from flask import Blueprint, request
from flask_jwt_extended import jwt_required, jwt_optional, create_access_token, current_user
from sqlalchemy.exc import IntegrityError
import json

USERS = Blueprint('users', __name__)


@USERS.route('/api/users', methods=('GET',))
def users(**kwargs):
    return 'hello'
