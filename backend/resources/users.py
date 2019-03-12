# [Flask]
from flask_restplus import Namespace, Resource
from flask_jwt_extended import jwt_required
from flask_api.status import *

# [App]
from backend.models.users import UserModel


api = Namespace('users', description='Users related operations')


@api.route('/', methods=['GET'])
class UsersList(Resource):
    """ get a list of all users """
    
    def get(self):
        users = [user.as_dict() for user in UserModel.query.all()]
        return {'users': users}, HTTP_200_OK
    
    
@api.route('/<pk>', methods=['GET', 'DELETE'])
class UsersDetail(Resource):
    """ get, delete or update a user  """

    def get(self, pk: int):
        user = UserModel.find_by_id(pk)
        if user:
            return user.as_dict(), HTTP_200_OK
        return {'message': 'User not found'}, HTTP_404_NOT_FOUND

    @jwt_required
    def delete(self, pk: int):
        item = UserModel.find_by_id(pk)
        if item:
            item.delete_from_db()

            return {'message': 'User has been deleted'}, HTTP_200_OK
