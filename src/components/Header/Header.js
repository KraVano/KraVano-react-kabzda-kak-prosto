import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import defUserPhoto from "../../assets/images/user.svg";

export default function Header(props) {
    return (
        <header className={classes.header}>
            <img src={props.logo} className="App-logo" alt="logo"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? <><img src={props.avatar || defUserPhoto} alt="image"/><h5>{props.login}</h5></> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}