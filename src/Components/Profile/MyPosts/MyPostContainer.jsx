import React from "react";
import {
    SetPost_ActionCreate,
    SetPostCurrent_ActionCreate
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let ProfilePage = props.store.getState().ProfilePage;

    let OnClickButton = () => {
        let action = SetPost_ActionCreate();
        props.store.dispatch(action);
    }
    let TextArea_OnChange = (text) => {
        let action = SetPostCurrent_ActionCreate(text);
        props.store.dispatch(action);
    }
    return (
        <MyPosts post_data={ProfilePage.post_data} OnAddPost={OnClickButton} OnChangeTextArea={TextArea_OnChange}
                 current_post={ProfilePage._current_post}/>


    )
}

export default MyPostsContainer;