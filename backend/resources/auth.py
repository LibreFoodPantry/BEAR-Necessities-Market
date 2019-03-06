# [Flask]
from flask import make_response, request, jsonify
from flask_restplus import Resource, Namespace
from flask_api.status import *

# [App]
from backend.models.users import UserModel


api = Namespace('auth', description='Auth related operations')


@api.route('/register/', methods=['POST'])
class RegistrationView(Resource):
    """ register a new user """

    def post(self):
        
        post_data = request.get_json()
        
        # Query to see if the user already exists
        user = UserModel.find_by_email(email=post_data.get('email', None))
        
        # If user doesn't already exist, create a user
        if not user:
            try:
                # Register the user
                email = post_data['email']
                plaintext_password = post_data['password']
                user = UserModel(email, plaintext_password)
                user.save_to_db()

                response = {
                    'message': 'You registered successfully. Please login.',
                }
                return make_response(jsonify(response)), HTTP_201_CREATED

            except Exception as e:
                response = {
                    'message': str(e)
                }
                return make_response(jsonify(response)), HTTP_401_UNAUTHORIZED
        else:
            response = {
                'message': 'User already exists. Please login.'
            }
            return make_response(jsonify(response)), HTTP_202_ACCEPTED
