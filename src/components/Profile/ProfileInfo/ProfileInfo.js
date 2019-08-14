import React, {Fragment} from "react";
import classes from "./ProfileInfo.module.css";

export default function ProfileInfo(props) {
    return (
        <Fragment>
            <div>
                <img
                    src={props.heroImg}
                    alt="image"/>
            </div>
            <div className={classes.avatar}>
                <img
                    src={props.avatarImg}
                    alt="image"/>
            </div>
        </Fragment>
    );
}

