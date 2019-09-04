const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    avatar: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.user, isAuth: true}
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, avatar) => ({
    type: SET_USER_DATA,
    user: {userId, email, login, avatar}
});

export default authReducer;