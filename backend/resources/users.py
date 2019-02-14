from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from backend.models.users import UserModel


class UsersDetail(Resource):

    def get(self, pk):
        user = UserModel.find_by_id(pk)
        if user:
            return user.json()
        return {'message': 'User not found'}, 404

    @jwt_required()
    def delete(self, pk):

        item = UserModel.find_by_id(pk)
        if item:
            item.delete_from_db()

            return {'message': 'User has been deleted'}


class UsersList(Resource):
    
    def get(self):
        return {'users': [user.json() for user in UserModel.query.all()]}  # More pythonic
