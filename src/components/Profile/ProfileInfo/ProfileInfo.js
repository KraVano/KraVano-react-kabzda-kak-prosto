import React, {Fragment} from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import defUserPhoto from "../../../assets/images/user.svg";
import ProfileStatus from "./ProfileStatus";

export default function ProfileInfo(props) {
    if (!props.profile) return <Preloader/>;

    return (
        <Fragment>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'*/}
            {/*        alt="image"/>*/}
            {/*</div>*/}
            <div className={classes.avatar}>
                <img
                    src={props.profile.photos.large || defUserPhoto}
                    alt="image"
                    style={{maxWidth: '300px'}}
                />
                <h2>{props.profile.fullName}</h2>
                <h3>{props.profile.aboutMe}</h3>
                <ProfileStatus status={"Hello my friends!"} />
                {/*{props.profile.contacts.map((c) => <h6>{c}</h6>)}*/}
                <p>lookingForAJob: {props.profile.lookingForAJob ? 'Yes' : 'No'}</p>
                <p>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</p>
            </div>
        </Fragment>
    );
}