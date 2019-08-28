import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

let UsersContainer = (props) => {

    let getUsers = () => {

        props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(response => {
            props.toggleIsFetching(false);
            props.setUsers(response.data.items);
            props.setTotalUsersCount(response.data.totalCount);
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

    let onPageChanged = (pageNumber) => {
        if (props.currentPage !== pageNumber) {
            props.setCurrentPage(pageNumber);
            props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(response => {
                props.toggleIsFetching(false);
                props.setUsers(response.data.items)
            });
        }
    }

    useEffect(() => getUsers(), []);

    return (<>
        {props.isFetching ? <Preloader/> : null}
        <Users onPageChanged={onPageChanged} users={props.users} totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize} currentPage={props.currentPage} follow={props.follow}
               unfollow={props.unfollow}/>
    </>);
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps,
    {
        follow: follow,
        unfollow: unfollow,
        setUsers: setUsers,
        setCurrentPage: setCurrentPage,
        setTotalUsersCount: setTotalUsersCount,
        toggleIsFetching: setIsFetching
    })(UsersContainer);