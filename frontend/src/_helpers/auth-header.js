export function authHeader() {

    // return authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('access_token'));

    if (token) {
        return { 'Authorization': 'Token ' + token };
    } else {
        return {};
    }
}
