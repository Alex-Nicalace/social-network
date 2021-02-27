import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {
    GetMessageCurrent_ActionCreate,
    SetMessage_ActionCreate,
    SetMessageCurrent_ActionCreate
} from "../../Redux/dialog-reducer";

const Dialogs = (props) => {
    debugger;
    let dialog_Elements = props.DialogPage.dialog_data.map(item => <DialogItem name_user={item.name_user}
                                                                               id_user={item.id_user}
                                                                               url_ava={item.url_ava}/>);
    let message_elements = props.DialogPage.message_data.map(item => <MessageItem message={item.message}
                                                                                  is_my={item.is_my}/>);

    let textarea_Ref = React.createRef();

    let textarea_OnClick = () => {
        props.dispatch(SetMessage_ActionCreate());
    }

    let TextArea_OnChange = (e) => {
        //TextArea засовывает в эту функцию объект EVENT
        //let text = textarea_Ref.current.value; // нативный способ
        let text = e.target.value; // способ реатка вроде
        props.dispatch(SetMessageCurrent_ActionCreate(text));
    }
djtyjdtyjdtyjdtyjdtyjdtyjdtyj
    rsrthsrthsrthsrthsrth
    rsrthsrthsrthsrthsrthsrth
    srth
    return (
        <div>
            <div className={s.Dialogs}>
                <div className={s.DialogsItems}>
                    {dialog_Elements}
                </div>
                <div className={s.MessagesItems}>
                    {message_elements}
                </div>
            </div>
            <div>
                <div>
                    <textarea onChange={TextArea_OnChange} ref={textarea_Ref} value={props.DialogPage._message_current}/>
                </div>
                <div>
                    <button onClick={textarea_OnClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;