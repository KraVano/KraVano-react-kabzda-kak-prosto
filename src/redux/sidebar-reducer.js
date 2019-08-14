let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {

    return state;
};

export default sidebarReducer;