/*
    Every time a request is made to a guarded api route, a JWT token
    will be required inside the request header. The purpose of this
    function is to keep our code DRY by offering a simple reusable
    function.

    In the case of a token refresh, a separate header will need to be
    created with the refresh_token.

    Ex: 'Authorization': 'Token ' + localStorage.getItem('refresh_token')
 */

export function authHeader() {

    // Return authorization header with JWT token
    let token = JSON.parse(localStorage.getItem('access_token'));

    if (token) {
        return { 'Authorization': 'Token ' + token };
    } else {
        return {};
    }
}
