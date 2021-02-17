import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItems}>
                {props.dialog_Elements}
                {/*<DialogItem name_user={dialog_data[0].name_user} id_user={dialog_data[0].id_user} />*/}
                {/*<DialogItem name_user={dialog_data[1].name_user} id_user={dialog_data[1].id_user} />*/}
                {/*<DialogItem name_user={dialog_data[2].name_user} id_user={dialog_data[2].id_user} />*/}
                {/*<DialogItem name_user={dialog_data[3].name_user} id_user={dialog_data[3].id_user} />*/}
                {/*<DialogItem name_user={dialog_data[4].name_user} id_user={dialog_data[4].id_user} />*/}
            </div>
            <div className={s.MessagesItems}>
                {props.message_elements}
                {/*<MessageItem message={message_data[0].message}/>*/}
                {/*<MessageItem message={message_data[1].message}/>*/}
                {/*<MessageItem message={message_data[2].message}/>*/}
            </div>
        </div>
    )
}

export default Dialogs;