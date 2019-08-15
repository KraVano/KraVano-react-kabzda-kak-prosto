import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessagesItem/MessagesItem";


export default function Dialogs(props) {

    let newMessageElem = React.createRef();

    let onSendMessage = () => {
        props.sendMessage(newMessageElem.current.value);
        newMessageElem.current.value = '';
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__list}>
                {props.dialogsPage.dialogsData.map((item) => <DialogItem key={item.id} id={item.id} name={item.name}/>)}
            </div>
            <div className={classes.messages}>
                {props.dialogsPage.messagesData.map((item)=> <MessageItem key={item.id} message={item.message}/> )}
                <div>
                    <div><textarea ref={newMessageElem} name="" id="" placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    );
}