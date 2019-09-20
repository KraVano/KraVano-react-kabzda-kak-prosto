import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// export default function DialogsContainer(props) {
// //     return (
// //         <StoreContext.Consumer>
// //             {
// //                 (store) => {
// //                     let state = store.getState();
// //                     let sendMessage = (text) => {
// //                         store.dispatch(sendMessageActionCreator(text));
// //                     };
// //
// //                     return <Dialogs dialogsPage={state.dialogsPage} sendMessage={sendMessage}/>;
// //                 }
// //             }
// //         </StoreContext.Consumer>
// //     );
// // }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text));
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);