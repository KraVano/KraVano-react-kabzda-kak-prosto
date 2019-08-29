import React, {useEffect} from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

let HeaderContainer = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            //debugger;
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1526`).then(res => {
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