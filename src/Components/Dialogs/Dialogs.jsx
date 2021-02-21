import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialog_Elements = props.DialogPage.dialog_data.map(item => <DialogItem name_user={item.name_user}
                                                                               id_user={item.id_user}
                                                                               url_ava={item.url_ava}/>);
    let message_elements = props.DialogPage.message_data.map(item => <MessageItem message={item.message}
                                                                                  is_my={item.is_my}/>);

    let textarea_Ref = React.createRef();

    let textarea_OnClick = () => {
        // let text = document.getElementById('id-text').value;
        let text = textarea_Ref.current.value;
        alert(text);
    }

    return (
        <div >
            <div className={s.Dialogs}>
                <div className={s.DialogsItems}>
                    {dialog_Elements}
                    {/*<DialogItem name_user={dialog_data[0].name_user} id_user={dialog_data[0].id_user} />*/}
                    {/*<DialogItem name_user={dialog_data[1].name_user} id_user={dialog_data[1].id_user} />*/}
                    {/*<DialogItem name_user={dialog_data[2].name_user} id_user={dialog_data[2].id_user} />*/}
                    {/*<DialogItem name_user={dialog_data[3].name_user} id_user={dialog_data[3].id_user} />*/}
                    {/*<DialogItem name_user={dialog_data[4].name_user} id_user={dialog_data[4].id_user} />*/}
                </div>
                <div className={s.MessagesItems}>
                    {message_elements}
                    {/*<MessageItem message={message_data[0].message}/>*/}
                    {/*<MessageItem message={message_data[1].message}/>*/}
                    {/*<MessageItem message={message_data[2].message}/>*/}
                </div>
            </div>
            <div>
                <textarea ref={textarea_Ref} name="" id="id-text" cols="30" rows=""></textarea>
            </div>
            <div>
                <button onClick={textarea_OnClick}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;