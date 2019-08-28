import React, {useEffect} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

let ProfileContainer = (props) => {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            props.setUserProfile(response.data);
        })
    }, []);

    return (<Profile {...props} profile={props.profile}/>);
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile: setUserProfile})(ProfileContainer);