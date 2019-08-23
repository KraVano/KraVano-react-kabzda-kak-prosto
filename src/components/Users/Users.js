import React, { useEffect } from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import defUserPhoto from '../../../src/assets/images/user.svg'

let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => props.setUsers(response.data.items));

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
    }

    useEffect(() => {
        getUsers();
    });

    return (<div>
        {/*<button onClick={getUsers}>Get Users</button>*/}
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