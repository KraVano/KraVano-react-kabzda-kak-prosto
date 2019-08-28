const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
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
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: action.message,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEA0J2ZMYtV8ChwbzW2ur9ZLeMKIZWi0BWWLiM-TUqDlaQzEMVw',
                likeCount: Math.floor(Math.random() * 100)
            };
            // stateCopy.postsData = [...state.postsData, newPost];
            return {...state, postsData: [...state.postsData, newPost]};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            console.log('Sorry, this method does not exist.');
    }

    return state;
};

export const addPostActionCreator = (message) => ({type: ADD_POST, message: message});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});

export default profileReducer;