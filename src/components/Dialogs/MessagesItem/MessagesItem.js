import React from "react";
import classes from "./MessagesItem.module.css";

export default function MessageItem(props) {
    return (
        <div className={classes.messages__item}>{props.message}</div>
    );
}