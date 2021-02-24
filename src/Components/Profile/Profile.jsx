import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    debugger;
    return (
        <main className={s.mainContent}>
            <ProfileInfo/>
            <MyPosts ProfilePage={props.ProfilePage} dispatch={props.dispatch} />
        </main>
    )
}

export default Profile;