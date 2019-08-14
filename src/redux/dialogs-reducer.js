const SEND_MESSAGE = 'ADD-DIALOG-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'YO!'},
        {id: 4, message: 'YO!'}
    ],
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'}
    ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            if (!action.hasOwnProperty("message")) return state;
            let newMessage = {
                id: state.messagesData.length + 1,
                message: action.message
            };
            state.messagesData.push(newMessage);
            break;
        default:
            console.log('Sorry, this method does not exist.');
    }

    return state;
};

export const sendMessageActionCreator = (message) => ({type: SEND_MESSAGE, message: message});

export default dialogsReducer;