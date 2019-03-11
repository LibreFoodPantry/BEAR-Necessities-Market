import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getAll,
    getById,
};

function login(email, password) {

    console.log(email, password);

    const credentials = {email: email, password: password};

    return axios.post(`/auth/login/`, {...credentials})
        .then(response => {
            const {access_token, refresh_token} = response.data['json'];

            console.log("ACCESS_TOKEN", access_token);
            console.log("REFRESH_TOKEN", refresh_token);

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
        });
}

function logout() {
    // remove token from local storage to log user out
    localStorage.removeItem('access_token');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/`, requestOptions).then(() => {

    });
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(() => {

    });

}