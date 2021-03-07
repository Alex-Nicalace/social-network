import React from 'react';
import s from "./Users.module.css";
import userPhoto from './../../assets/images/photo_default.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
    const UserItem = (props) => {
        const onClickButton = (followed) => followed ? props.deleteFollow(props.u.id) :  props.setFollow(props.u.id);
        return (
            <div className={s.UserRow} key={props.u.id}>
                <div className={s.UserRow_leftColumn}>
                    <div className={s.avatar}>
                        <NavLink to={'/Profile/' + props.u.id}>
                            <img src={props.u.photos.small ? props.u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        <button onClick={() => onClickButton(props.u.followed)}
                                disabled={props.followingInProgress.some(item => item === props.u.id)}>
                            {props.u.followed ? 'unfollow' : 'follow'}
                        </button>
                    </div>
                </div>
                <div className={s.UserRow_rightColumn}>
                    <div className={s.UserRow_rightColumn_top}>
                        <div>{props.u.name}</div>
                        <div>{'props.u.location.country'}</div>
                    </div>
                    <div className={s.UserRow_rightColumn_mid}>{'props.u.location.city'}</div>
                    <div className={s.UserRow_rightColumn_bot}>{props.u.status}</div>


                </div>

            </div>
        )

    }

    let users_data = props.items.map((item, index) => <UserItem u={item}
                                                                key={index}
                                                                followingInProgress={props.followingInProgress}
                                                                deleteFollow={props.deleteFollow}
                                                                setFollow={props.setFollow}/>)

    let pagesArray = [];
    for (let i = 1; i <= Math.ceil(props.countUser / props.sizePage); i++) {
        pagesArray.push(i);
    }
    let pages_data = pagesArray.map((item, index) => <div onClick={() => props.OnSetCurrentPage(item)}
                                                          className={`${item === props.currentPage ? s.currentPage : ""} ${s.pagesItem}`}
                                                          key={index}>{item}</div>)

    return (
        <div>
            <div className={s.NamePage}>Users</div>
            <div className={s.pagesList}>
                {pages_data}
            </div>
            <div className={s.Users}>
                {users_data}
            </div>
        </div>
    )
}

export default Users;