import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://www.pinclipart.com/picdir/big/51-511102_design-free-logo-srj-hd-logo-png-clipart.png"
                 alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <NavLink to={'/jhjh'}>{props.login}</NavLink>
                    : <NavLink to={'/Login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;