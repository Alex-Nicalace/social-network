import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div >
            <img src="https://ic.pics.livejournal.com/tanjand/44781189/83248105/83248105_original.jpg" alt=""/>
            {props.message} количество лайков - {props.likeCount}
        </div>
    )
}

export default Post;