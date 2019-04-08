# [Flask]
from flask import make_response, request, jsonify
from flask_restplus import Namespace, Resource
from flask_jwt import jwt_required
from flask_api.status import *

# [App]
from backend.models.order import OrdersModel


api = Namespace('orders', description='Orders related operations')


@api.route('/<pk>', methods=['POST'])
class OrdersDetail(Resource):
    """ post an order  """

    def post(self):
        
        post_data = request.get_json()
        
        try:
            # Register the order
            email = post_data['email']
            order = OrdersModel(email)
            order.save_to_db()

            return HTTP_201_CREATED

        except Exception as e:
            response = {
                'message': str(e)
            }
            return make_response(jsonify(response)), HTTP_401_UNAUTHORIZED
