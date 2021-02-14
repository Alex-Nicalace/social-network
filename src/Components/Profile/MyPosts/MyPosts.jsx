import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    New posts
                </div>
            </div>
            <div>
                <Post message = 'test' likeCount = '6'/>
                <Post message = 'how are you' likeCount = '5'/>
                <Post message = 'react' likeCount = '4'/>
                <Post message = 'boy' likeCount = '3'/>
                <Post message = 'girl' likeCount = '2'/>
            </div>
        </div>


    )
}

export default MyPosts;