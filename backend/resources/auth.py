# [Flask]
from flask import make_response, request, jsonify
from flask_restplus import Resource, Namespace
from flask_api.status import *
from flask_jwt_extended import (
    jwt_required,
    create_access_token,
    jwt_refresh_token_required,
    get_jwt_identity,
    create_refresh_token,
)

# [App]
from backend.models.users import UserModel


api = Namespace('auth', description='Auth related operations')


@api.route('/register/', methods=['POST'])
class RegistrationView(Resource):
    """ register a new user """
	
	@jwt_required
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


@api.route('/login/', methods=['POST'])
class LoginView(Resource):
    
    @staticmethod
    def authenticate(email, password):
        user = UserModel.find_by_email(email)
        if user and user.is_correct_password(password):
            return user
        else:
            return None
    
    def post(self):
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request."}), HTTP_400_BAD_REQUEST

        post_data = request.get_json()
    
        email = post_data.get('email', None)
        password = post_data.get('password', None)
        if not email:
            return jsonify({"msg": "Missing email parameter."}), HTTP_400_BAD_REQUEST
        if not password:
            return jsonify({"msg": "Missing password parameter."}), HTTP_400_BAD_REQUEST
    
        user = self.authenticate(email, password)
        if not user:
            return jsonify({"msg": "User not found."}), HTTP_404_NOT_FOUND
    
        # Identity can be any data that is json serializable
        access_token = create_access_token(identity=email)
        refresh_token = create_refresh_token(identity=email)
        return jsonify(
            access_token=access_token,
            refresh_token=refresh_token
        ), HTTP_200_OK


@api.route('/token/refresh/', methods=['GET'])
class TokenRefresh(Resource):

    @jwt_refresh_token_required
    def get(self):
        # retrieve the user's identity from the refresh token using a Flask-JWT-Extended built-in method
        current_user = get_jwt_identity()
        
        # return a non-fresh token for the user
        new_token = create_access_token(identity=current_user, fresh=False)
        return jsonify(access_token=new_token), HTTP_200_OK
