## Using JWT (JSON Web Tokens)

### Basic Usage
- [create_access_token()](https://flask-jwt-extended.readthedocs.io/en/latest/api.html#flask_jwt_extended.create_access_token): Create a new access token.
- [jwt_required()](https://flask-jwt-extended.readthedocs.io/en/latest/api.html#flask_jwt_extended.jwt_required): A decorator to protect a Flask endpoint.
- [get_jwt_identity()](https://flask-jwt-extended.readthedocs.io/en/latest/api.html#flask_jwt_extended.get_jwt_identity): In a protected endpoint, this will return the identity of the JWT that is accessing this endpoint. If no JWT is present,`None` is returned instead.


### Securing your routes

```python
# Protect a view with jwt_required, which requires a valid access token
# in the request to access.
@app.route('/protected', methods=['GET'])
@jwt_required
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200
```

### Accessing protected routes
To access a jwt_required protected view, all we have to do is send in the JWT with the request. By default, this is done with an authorization header that looks like:

```
Authorization: Token <access_token>
```

To simplify and keep code DRY, a reusable requests header was built. You can find this method in: [frontend/src/_helpers/auth-header.js](https://github.com/LibreFoodPantry/BEAR-Necessities-Market/tree/master/frontend/src/_helpers/auth-header.js)

Example request to a protected route using react/axios

- First import authheader

```js
import { authHeader } from '../_helpers';
```

- Create service method to call route

```js
/**
 * Request all users from the database.
 *
 * @returns {Promise<Response>}
 */
function getAllUsers() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/`, requestOptions).then(() => {

    });
}
```

### Flask JWT extended full documentation

The full documentation can be found [here](https://flask-jwt-extended.readthedocs.io/en/latest/)
