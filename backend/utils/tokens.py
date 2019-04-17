# [Flask]
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer

# [App]
from backend.config import Config
from backend.models.users import UserModel

config = Config()


def create_token(user):
    """
    Create a token with user_id encrypted in payload.
    Default expiration: 3600
    """
    s = Serializer(config.SECRET_KEY)
    return s.dumps({'user': user.id}).decode('utf-8')


def verify_token(token):
    """ Verify token and return user decoded from payload. """
    s = Serializer(config.SECRET_KEY)
    try:
        data = s.loads(token)
    except:
        return None
    id = data.get('user')
    if id:
        return UserModel.find_by_id(id)
    return None
