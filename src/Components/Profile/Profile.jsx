import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    debugger;
    return (
        <main className={s.mainContent}>
            <ProfileInfo/>

            <MyPostsContainer />

        </main>
    )
}

export default Profile;