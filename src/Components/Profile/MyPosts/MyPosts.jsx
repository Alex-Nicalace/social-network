import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let post_elements = props.post_data.map((item, index) => <Post message={item.message}
                                                                      likeCount={item.likeCount} key={index}/>);
    let ref_dom_element = React.createRef();
    let OnClickButton = () => {
        //props.dispatch(SetPost_ActionCreate());
        props.OnAddPost();
    }
    let TextArea_OnChange = () => {
        let text = ref_dom_element.current.value;
        //props.dispatch(SetPostCurrent_ActionCreate(text));
        props.OnChangeTextArea(text);
    }
    return (
        <div className={s.PostsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={TextArea_OnChange} ref={ref_dom_element}
                                  value={props.current_post}/>
                    </div>
                    <div>
                        <button onClick={OnClickButton}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.Post}>
                {post_elements}
            </div>
        </div>


    )
}

export default MyPosts;