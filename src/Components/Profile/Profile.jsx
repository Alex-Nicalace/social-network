import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <main className={s.mainContent}>
            <ProfileInfo profile={props.ProfilePage.profile}/>
            <MyPosts current_post={props.ProfilePage.current_post} OnAddPost={props.SetPost}
                     OnChangeTextArea={props.SetPostCurrent} post_data={props.ProfilePage.post_data}/>

        </main>
    )
}

export default Profile;