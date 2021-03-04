import React from "react";
import s from "./ProfileInfo.module.css"
import Preloading from "../../Common/Preloading/Preloading";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloading/>
        )
    }
    return (
        <div>
            <div><img src="https://thumbs.dreamstime.com/b/abstract-bubble-rainbow-header-sky-14141610.jpg" alt=""
                      width="100%"/></div>
            <div>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div className={s.DescriptionBlock}>
                {props.profile.aboutMe}
            </div>
        </div>
    )
}

export default ProfileInfo;