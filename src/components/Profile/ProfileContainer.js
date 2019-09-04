import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {author, profileAPI} from "../../api/api";

let ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        //if (!userId) author.getMe().then(res => userId = res.data.id);
        profileAPI.getUserProfile(userId).then(response => {
            props.setUserProfile(response.data);
        })
    }, []);

    return (<Profile {...props} profile={props.profile}/>);
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile: setUserProfile})(WithUrlDataContainerComponent);