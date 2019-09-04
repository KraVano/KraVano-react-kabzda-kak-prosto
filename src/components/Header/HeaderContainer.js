import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {author, profileAPI} from "../../api/api";

let HeaderContainer = (props) => {

    useEffect(() => {
        author.getMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                profileAPI.getUserProfile(id).then(res => {
                    let avatar = res.data.photos.small;
                    props.setAuthUserData(id, email, login, avatar);
                });
            }
        });
    }, []);

    return <Header {...props}/>;
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    avatar: state.auth.avatar
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);