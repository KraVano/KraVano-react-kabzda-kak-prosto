import React from 'react';
import styles from "./users.module.css";
import defUserPhoto from "../../assets/images/user.svg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    //let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pageCount = 10;
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {
                pages.map(p => <span onClick={() => props.onPageChanged(p)}
                                     className={props.currentPage === p ? styles.selectedPage : ''}>{p}</span>)
            }
        </div>
        {props.users.map(u =>
            <div key={u.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small || defUserPhoto} className={styles.usersPhoto} alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            usersAPI.unFollow(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                        }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            usersAPI.follow(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                        }
                        }>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <p>{u.name}</p>
                    <p>{u.status}</p>
                </span>
                <span>
                    <p>{"u.location.country"}</p>
                    <p>{"u.location.city"}</p>
                </span>
            </span>
            </div>)}
    </div>);
}

export default Users;