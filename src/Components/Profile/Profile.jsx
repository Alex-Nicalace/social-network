import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.mainContent}>
            <div><img src="https://thumbs.dreamstime.com/b/abstract-bubble-rainbow-header-sky-14141610.jpg" alt=""
                      width="100%"/></div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </main>
    )
}

export default Profile;