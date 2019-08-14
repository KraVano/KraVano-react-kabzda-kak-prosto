import React from 'react';
import './MyPosts.css';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// export default function MyPostsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addPost = (text) => {
//                         store.dispatch(addPostActionCreator(text));
//                     };
//
//                     return <MyPosts postsData={state.profilePage.postsData} addPost={addPost}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => dispatch(addPostActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;