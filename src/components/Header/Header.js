import React from 'react';
import classes from './Header.module.css';

export default function Header(props) {
    return (
        <header className={classes.header}>
            <img src={props.logo} className="App-logo" alt="logo"/>
        </header>
    );
}