import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

let HeaderContainer = (props) => {

    useEffect(() => {
        props.getAuthUserData();
    }, []);

    return <Header {...props}/>;
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    avatar: state.auth.avatar
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);