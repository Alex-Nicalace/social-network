import React from "react";

import {
    GetMessageCurrent_ActionCreate,
    SetMessage_ActionCreate,
    SetMessageCurrent_ActionCreate
} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let textarea_OnClick = () => {
        let action = SetMessage_ActionCreate();
        props.store.dispatch(action);
    }

    let TextArea_OnChange = (text) => {
        let action = SetMessageCurrent_ActionCreate(text);
        props.store.dispatch(action);
    }

    let DialogPage = props.store.getState().DialogPage;

    return (
        <Dialogs DialogPage={DialogPage}
                 textarea_OnClick={textarea_OnClick}
                 TextArea_OnChange={TextArea_OnChange}/>
    )
}

export default DialogsContainer;