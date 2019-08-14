import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./DialogsItem.module.css";

export default function DialogItem(props) {
    return (
        <div className={`${classes.dialogs__item}`}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}