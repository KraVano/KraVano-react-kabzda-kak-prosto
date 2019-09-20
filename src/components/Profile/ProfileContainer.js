import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {authorAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        // if (!userId) authorAPI.getMe().then(res => userId = res.data.id);
        props.getUserProfile(userId);
    }, []);

    return (<Profile {...props} profile={props.profile}/>);
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {getUserProfile: getUserProfile})(WithUrlDataContainerComponent);