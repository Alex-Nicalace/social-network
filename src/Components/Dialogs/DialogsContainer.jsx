import React from "react";

import {
    SetMessage_ActionCreate,
    SetMessageCurrent_ActionCreate
} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        textarea_OnClick: () => {
            let action = SetMessage_ActionCreate();
            dispatch(action);
        },
        TextArea_OnChange: (text) => {
            let action = SetMessageCurrent_ActionCreate(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;