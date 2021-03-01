import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducer = combineReducers({
    DialogPage: dialogReducer,
    ProfilePage: profileReducer,
    sidebar: sidebarReducer,
    UsersPage: usersReducer,
});

let store = createStore(reducer);

export default store;