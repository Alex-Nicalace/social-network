import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialog_Elements = props.DialogPage.dialog_data.map(item => <DialogItem name_user={item.name_user}
                                                                               id_user={item.id_user}
                                                                               url_ava={item.url_ava}/>);
    let message_elements = props.DialogPage.message_data.map(item => <MessageItem message={item.message}
                                                                                  is_my={item.is_my}/>);

    let textarea_Ref = React.createRef();

    let Button_OnClick = () => {
        props.textarea_OnClick();
    }

    let TextArea_OnChange = (e) => {
        //TextArea засовывает в эту функцию объект EVENT
        //let text = textarea_Ref.current.value; // нативный способ
        let text = e.target.value; // способ реатка вроде
        props.TextArea_OnChange(text);
    }

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
                    <button onClick={Button_OnClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;