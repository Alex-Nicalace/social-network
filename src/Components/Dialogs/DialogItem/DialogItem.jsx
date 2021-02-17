import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id_user
    return(
        <div className={s.DialogItem}>
            <NavLink to={path}>{props.name_user}</NavLink>
        </div>
    )
};

export default DialogItem;