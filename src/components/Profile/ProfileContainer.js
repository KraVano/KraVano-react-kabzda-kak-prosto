import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {authorAPI} from "../../api/api";

let ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        // if (!userId) authorAPI.getMe().then(res => userId = res.data.id);
        props.getUserProfile(userId);
    }, []);

    if (props.isAuth === false) return <Redirect to={"/login"}/>;

    return (<Profile {...props} profile={props.profile}/>);
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile: getUserProfile})(WithUrlDataContainerComponent);