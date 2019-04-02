# [Flask]
from flask_api.status import *
from flask_jwt_extended import (
    decode_token,
    create_access_token,
    create_refresh_token
)


def test_user_registration(client, init_database):
    """
    Test that the registration route creates a user.
    """

    data = {
        'email': 'mhawes24@gmail.com',
        'password': 'some_password',
    }
    url = '/auth/register/'

    response = client.post(url, json=data)
    
    assert response.status_code == HTTP_201_CREATED
    assert b'You registered successfully. Please login.' in response.data


def test_jwt_login_json(client):
    """
    Ensure JWT login view using JSON POST works.
    """
    data = {
        'email': 'mhawes244455@gmail.com',
        'password': 'password1',
    }
    url = '/auth/login/'
    
    response = client.post(url, json=data)

    payload = response.get_json()
    access_token = payload['json']['access_token']
    refresh_token = payload['json']['refresh_token']
    decoded_access_token = decode_token(access_token)
    decoded_refresh_token = decode_token(refresh_token)

    assert response.status_code, HTTP_200_OK
    assert decoded_access_token['identity'] == data['email']
    assert decoded_refresh_token['identity'] == data['email']


def test_jwt_login_invalid_json_format(client):
    """
    Ensure JWT login view using POST fails
    if invalid json format is provided.
    """
    
    data = {
        'email': 'mhawes244455@gmail.com',
        'password': 'password1',
    }
    url = '/auth/login/'

    response = client.post(url, data=data)  # Send data not in format of JSON

    payload = response.get_json()
    msg = payload['json']['msg']

    assert response.status_code,  HTTP_400_BAD_REQUEST
    assert msg == 'Missing JSON in request.'


def test_jwt_login_json_bad_creds(client):
    """
    Ensure JWT login view using JSON POST fails
    if bad credentials are used.
    """
    data = {
        'email': 'bad_email@gmail.com',
        'password': 'password1',
    }
    url = '/auth/login/'

    response = client.post(url, json=data)

    payload = response.get_json()
    msg = payload['json']['msg']

    assert response.status_code,  HTTP_404_NOT_FOUND
    assert msg == 'User not found.'
    

def test_jwt_login_json_missing_email(client):
    """
    Ensure JWT login view using JSON POST fails if missing fields.
    """
    data = {
        'password': 'password1',
    }
    url = '/auth/login/'

    response = client.post(url, json=data)
    payload = response.get_json()
    msg = payload['json']['msg']

    assert response.status_code,  HTTP_400_BAD_REQUEST
    assert msg == 'Missing email parameter.'


def test_jwt_login_json_missing_password(client):
    """
    Ensure JWT login view using JSON POST fails if missing fields.
    """
    data = {
        'email': 'mhawes244455@gmail.com',
    }
    url = '/auth/login/'
    
    response = client.post(url, json=data)

    payload = response.get_json()
    msg = payload['json']['msg']

    assert response.status_code,  HTTP_400_BAD_REQUEST
    assert msg == 'Missing password parameter.'


def test_jwt_token_refresh_with_valid_token(client):
    """
    Test getting a refreshed token from original token works
    No date/time modifications are neccessary because it is assumed
    that this operation will take less than 300 seconds.
    """
    identity = 'testuser@gmail.com'
    access_token = create_refresh_token(identity=identity)
    headers = {
        'Authorization': 'Token {}'.format(access_token)
    }
    url = '/auth/token/refresh/'
    
    response = client.get(url, headers=headers)

    payload = response.get_json()
    token = payload['json']['access_token']
    decoded_token = decode_token(token)

    assert response.status_code,  HTTP_200_OK
    assert decoded_token['identity'] == identity
    

def test_jwt_token_refresh_with_invalid_token(client):
    """
    Test getting a refreshed token fails if given a token that is
    not a refresh token.
    """
    identity = 'testuser@gmail.com'
    access_token = create_access_token(identity=identity)
    headers = {
        'Authorization': 'Token {}'.format(access_token)
    }
    url = '/auth/token/refresh/'
    
    response = client.get(url, headers=headers)

    assert response.status_code == HTTP_500_INTERNAL_SERVER_ERROR
