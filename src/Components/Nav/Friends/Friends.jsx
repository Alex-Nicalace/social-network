import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
    const FriendsItem = (props) => {
        return (
            <div className={s.Friends__item}>
                <div className={s.Friends__avatar}>
                    <img src={props.friend.url_ava} alt=""/>
                </div>
                <div className={s.Friends__name}>
                    {props.friend.friend_name}
                </div>
            </div>
        )
    }

    let friends_elements = props.friends.map((item, index) => <FriendsItem friend={item} key={index}/>)

    return (
        <div className={s.Friends}>
            <div className={s.Friends__title}>Friends</div>
            <div className={s.Friends__list}>
                {friends_elements}
            </div>
        </div>
    )
}

export default Friends;