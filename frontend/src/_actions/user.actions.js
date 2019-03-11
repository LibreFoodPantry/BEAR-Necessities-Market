import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
};


function login(username, password) {

    console.log(username, password);

    return dispatch => {

        userService.login(username, password)
            .then(
                user => {
                    dispatch({
                      type: userConstants.LOGIN_SUCCESS,
                      user
                    });
                    history.push('/');
                },
                error => {
                    dispatch({
                      type: userConstants.LOGIN_FAILURE,
                      error
                    });
                    dispatch(alertActions.error(error));
                }
            );
    };

}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
