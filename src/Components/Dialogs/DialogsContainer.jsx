import React from "react";

import {
    SetMessage_ActionCreate,
    SetMessageCurrent_ActionCreate
} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage,
        //isAuth: state.auth.isAuth,
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

// let WithAuthRedirectDialogs = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirectDialogs)

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)