import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
                    likeCount: 12
                },
                {
                    id: 2,
                    message: 'It\'s my first post',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
                    likeCount: 10
                }
            ],
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Dimych',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw'
                },
                {
                    id: 2,
                    name: 'Andrey',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw'
                },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State changed");
    },
    addPost(message) {
        let newPost = {
            id: this._state.profilePage.postsData.length + 1,
            message: message,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
            likeCount: Math.floor(Math.random() * 100)
        };
        this._state.profilePage.postsData.push(newPost);
        this._callSubscriber(this._state);
    },
    sendMessage(message) {
        let newMessage = {
            id: this._state.dialogsPage.messagesData.length + 1,
            message: message
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        if (typeof observer === "function") {
            this._callSubscriber = observer;
            return true;
        }
        return false;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

        // switch (action.type) {
        //     case ADD_POST:
        //         // action.hasOwnProperty("message") ? this.addPost(action.message) : this.addPost("");
        //         this.addPost(action.message);
        //         break;
        //     case SEND_MESSAGE:
        //         if (!action.hasOwnProperty("message")) return false;
        //         this.sendMessage(action.message);
        //         break;
        //     default:
        //         console.log('Sorry, this method does not exist.');
        // }
    }
};

export default store;
window.store = store;