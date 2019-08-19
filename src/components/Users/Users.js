import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'Dmitry',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"},
                followed: true
            },
            {
                id: 2,
                fullName: 'Sasha',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
                status: "I am a bosss",
                location: {city: "Moscow", country: "Russia"},
                followed: false
            },
            {
                id: 3,
                fullName: 'Andrew',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
                status: "I am a bossss",
                location: {city: "Kiev", country: "Ukraine"},
                followed: true
            }
        ]);
    }

    return (<div>
        {props.users.map(u =>
            <div key={u.id}>
            <span>
                <div>
                    <img src={u.avatar} className={styles.usersPhoto} alt="avatar"/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <p>{u.fullName}</p>
                    <p>{u.status}</p>
                </span>
                <span>
                    <p>{u.location.country}</p>
                    <p>{u.location.city}</p>
                </span>
            </span>
            </div>)}
    </div>);
}

export default Users;