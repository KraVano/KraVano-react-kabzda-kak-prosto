import React from 'react';
import './Post.css';

export default function Post(props) {
    return (
        <div className="posts__item">
            <img src={props.img} alt="img"/>
            <p>{props.text}</p>
            <span>like {props.likesCount}</span>
        </div>
    );
}