"""Helper utilities and decorators."""
from backend.models.users import UserModel


def jwt_identity(payload):
    return UserModel.get_by_id(payload)


def identity_loader(user):
    return user.id