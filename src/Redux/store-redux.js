import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducer = combineReducers({
    DialogPage: dialogReducer,
    ProfilePage: profileReducer,
    sidebar: sidebarReducer,
    UsersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store; // чтобы можно было в консоли узучить что внутри

export default store;