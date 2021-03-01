import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users_data: state.UsersPage.users_data,
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        on_follow: (id_user) => {
            let action = followAC(id_user);
            dispatch(action);
        },
        on_unfollow: (id_user) => {
            let action = unfollowAC(id_user);
            dispatch(action);
        },
        on_setUsersAC: (users_data) => {
            let action = setUsersAC(users_data);
            dispatch(action);
        }
    }

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;