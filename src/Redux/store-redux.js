import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducer = combineReducers({DialogPage: dialogReducer, ProfilePage: profileReducer, sidebar: sidebarReducer});

let store = createStore(reducer);

export default store;