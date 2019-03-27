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
    assert response.status_code == 201
    assert b'You registered successfully. Please login.' in response.data
