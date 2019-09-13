import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    getUsers,
    follow,
    unFollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

let UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, []);

    let onPageChanged = (pageNumber) => {
        // if (props.currentPage !== pageNumber) {
        //     props.setCurrentPage(pageNumber);
        //     props.toggleIsFetching(true);
        //     usersAPI.getUsers(pageNumber, props.pageSize).then(data => {
        //         props.toggleIsFetching(false);
        //         props.setUsers(data.items)
        //     });
        // }
        if (props.currentPage !== pageNumber) {
            props.setCurrentPage(pageNumber);
            props.getUsers(pageNumber, props.pageSize);
        }
    }

    return (<>
        {props.isFetching ? <Preloader/> : null}
        <Users onPageChanged={onPageChanged} users={props.users} totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize} currentPage={props.currentPage} follow={props.follow}
               unFollow={props.unFollow}
               followingInProgress={props.followingInProgress}/>
    </>);
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         followSuccess: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollowSuccess: (userId) => {
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
        setCurrentPage: setCurrentPage,
        getUsers: getUsers,
        follow: follow,
        unFollow: unFollow
    })(UsersContainer);