import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     fullName: 'Dmitry',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
        //     status: "I am a boss",
        //     location: {city: "Minsk", country: "Belarus"},
        //     followed: true
        // },
        // {
        //     id: 2,
        //     fullName: 'Sasha',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
        //     status: "I am a bosss",
        //     location: {city: "Moscow", country: "Russia"},
        //     followed: false
        // },
        // {
        //     id: 3,
        //     fullName: 'Andrew',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
        //     status: "I am a bossss",
        //     location: {city: "Kiev", country: "Ukraine"},
        //     followed: true
        // },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: true};
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: false};
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalUserCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, totalUserCount: totalUserCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });

    // props.setUsers([
    //     {
    //         id: 1,
    //         fullName: 'Dmitry',
    //         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
    //         status: "I am a boss",
    //         location: {city: "Minsk", country: "Belarus"},
    //         followed: true
    //     },
    //     {
    //         id: 2,
    //         fullName: 'Sasha',
    //         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
    //         status: "I am a bosss",
    //         location: {city: "Moscow", country: "Russia"},
    //         followed: false
    //     },
    //     {
    //         id: 3,
    //         fullName: 'Andrew',
    //         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
    //         status: "I am a bossss",
    //         location: {city: "Kiev", country: "Ukraine"},
    //         followed: true
    //     }
    // ]);
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
}

export const unFollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unFollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
}


export default usersReducer;