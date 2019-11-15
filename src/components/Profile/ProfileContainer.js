import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {authorAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            authorAPI.getMe().then(res => {
                props.getProfile(res.data.data.id);
                props.getStatus(res.data.data.id);
            });
        } else {
            props.getProfile(userId);
            props.getStatus(userId);
        }
    }, []);

    return (<Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>);
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default connect(mapStateToProps, {
    getProfile: getProfile,
    getStatus: getStatus,
    updateStatus: updateStatus
})(WithUrlDataContainerComponent);