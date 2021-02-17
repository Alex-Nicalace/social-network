import React from "react";
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    return (
        <div className={s.PostsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.Post}>
                {props.post_elements}
                {/*<Post message={post_data[0].message} likeCount={post_data[0].likeCount} />*/}
                {/*<Post message='how are you' likeCount='5'/>*/}
                {/*<Post message='react' likeCount='4'/>*/}
                {/*<Post message='boy' likeCount='3'/>*/}
                {/*<Post message='girl' likeCount='2'/>*/}
            </div>
        </div>


    )
}

export default MyPosts;