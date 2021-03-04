import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/Profile" activeClassName={s.active} >Profile</NavLink></li>
                <li><NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to='/Users' activeClassName={s.active}>Users</NavLink></li>
                <li><NavLink to='/News' activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to='/Music' activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink></li>
            </ul>
            <FriendsContainer />
        </nav>
    )
}

export default Nav;