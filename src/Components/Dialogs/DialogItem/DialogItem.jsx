import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id_user
    return (
        <div className={s.DialogItem}>
            <div className={s.DialogItem__urlAva}><img src={props.url_ava} alt=""/></div>
            <div className={s.DialogItem__nameUser}>
                <NavLink to={path}>{props.name_user}</NavLink>
            </div>
        </div>
    )
};

export default DialogItem;