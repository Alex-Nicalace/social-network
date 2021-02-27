import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    debugger;
    return (
        <main className={s.mainContent}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </main>
    )
}

export default Profile;