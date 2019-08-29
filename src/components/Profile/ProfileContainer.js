import React, {useEffect} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

let ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            props.setUserProfile(response.data);
        })
    }, []);

    return (<Profile {...props} profile={props.profile}/>);
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WittUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile: setUserProfile})(WittUrlDataContainerComponent);