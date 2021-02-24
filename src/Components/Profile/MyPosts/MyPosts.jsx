import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {GetPostCurrent_ActionCreate, SetPost_ActionCreate, SetPostCurrent_ActionCreate} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {
    debugger;
    let post_elements = props.ProfilePage.post_data.map(item => <Post message={item.message}
                                                                      likeCount={item.likeCount}/>);
    let ref_dom_element = React.createRef();
    let OnClickButton = () => {
        props.dispatch(SetPost_ActionCreate());
    }
    let TextArea_OnChange = () => {
        let text = ref_dom_element.current.value;
        props.dispatch(SetPostCurrent_ActionCreate(text));
    }
    return (
        <div className={s.PostsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={TextArea_OnChange} ref={ref_dom_element}
                                  value={props.ProfilePage._current_post}/>
                    </div>
                    <div>
                        <button onClick={OnClickButton}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.Post}>
                {post_elements}
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