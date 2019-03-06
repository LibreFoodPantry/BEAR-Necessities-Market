# [Flask]
from flask_api.status import *


def test_get_users(client, init_database):
    """
    Test that /users/ route returns all users in DB.
    """
    url = '/users/'
    response = client.get(url)
    assert response.status_code == HTTP_200_OK
    

def test_get_user_by_id(client, init_database, new_user):
    """
    Test that /users/<pk> returns the user with id=pk
    """
    new_user.id = 17
    new_user.save()
    
    url = '/users/17'
    response = client.get(url)
    assert response.status_code == HTTP_200_OK
    

