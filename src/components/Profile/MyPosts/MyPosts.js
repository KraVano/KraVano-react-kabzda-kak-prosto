import React, {useState} from 'react';
import './MyPosts.css';
import Post from "./Post/Post";

export default function MyPosts(props) {

    // const [message, setMessage] = useState("");
    // onChange={(event) => setMessage(event.target.value)}

    let newPostElem = React.createRef();

    let addPost = () => {
        props.addPost(newPostElem.current.value);
        newPostElem.current.value = '';
    };

    return (
        <div className='posts-wrapp'>
            <h3>My Posts</h3>
            <div><textarea ref={newPostElem}></textarea></div>
            <button onClick={addPost}>Add post</button>
            <div className="posts">
                {props.postsData.map((item) => <Post key={item.id} text={item.message} img={item.img} likesCount={item.likeCount}/>)}
            </div>
        </div>
    );
}