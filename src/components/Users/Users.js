import React from 'react';
import styles from "./users.module.css";
import defUserPhoto from "../../assets/images/user.svg";

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
                    <img src={u.photos.small || defUserPhoto} className={styles.usersPhoto} alt="avatar"/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => props.follow(u.id)}>Follow</button>}
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