import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {dispatch(sendMessageActionCreator(text));}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;