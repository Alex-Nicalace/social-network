import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div><img src="https://thumbs.dreamstime.com/b/abstract-bubble-rainbow-header-sky-14141610.jpg" alt=""
                      width="100%"/></div>
            <div className={s.DescriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;