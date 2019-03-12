import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getAllUsers,
    getUserById,
};

/**
 * Request a session token for the credentials.
 * If a user exists for credentials given, an
 * access_token and refresh_token will be returned
 * in the response.
 *
 * @param email: string
 * @param password: string
 * @returns {Promise<AxiosResponse<any>>}
 */
function login(email, password) {

    const credentials = {email: email, password: password};

    return axios.post(`/auth/login/`, {...credentials})
        .then(response => {
            const {access_token, refresh_token} = response.data['json'];

            // For debugging reference...
            console.log("ACCESS_TOKEN", access_token);
            console.log("REFRESH_TOKEN", refresh_token);

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
        });
}

/**
 * Destroy tokens, removing the ability
 * for the user to stay in session.
 * Without the tokens, the user will no longer
 * be able to access the platform until
 * they re-login.
 */
function logout() {
    console.log('Destroying tokens...');

    // Remove token from local storage to log user out
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
}

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

/**
 * Request the user data for the user with id = id.
 * @param id: integer
 * @returns {Promise<Response>}
 */
function getUserById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(() => {

    });

}
