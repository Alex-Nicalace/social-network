import React from "react";
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href="/Profile">Profile</a></li>
                <li><a href='/Dialogs'>Messages</a></li>
                <li><a href='/News'>News</a></li>
                <li><a href='/Music'>Music</a></li>
                <li><a href='/Settings'>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav;