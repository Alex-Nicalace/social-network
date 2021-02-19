import s from "./MessageItem.module.css";
import React from "react";

const MessageItem = (props) => {
    //+ ' ' + (props.is_my == 0 ? s.MessageItem__right : s.MessageItem__left)}
    return (
        <div className={s.MessageItem + ' ' + (props.is_my == 1 ? s.MessageItem_right : s.MessageItem_left)}>
            <div className={s.MessageItem__uni } >
                <div className={s.MessageItem__uni_circle + ' ' + (props.is_my == 1 ? s.MessageItem__uni_circleR : s.MessageItem__uni_circleL)}></div>
                <div className={s.MessageItem__uni_text}>{props.message}</div>
            </div>
        </div>
    )
}

export default MessageItem;