import React from 'react';
import s from "./Users.module.css";
import * as axias from 'axios'

const Users = (props) => {
    debugger;
    if (props.users_data.length === 0)
        axias.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            props.on_setUsersAC();
        })
    // {
    //     props.on_setUsersAC(
    //         [
    //             {
    //                 avatarUrl: 'https://peopletalk.ru/wp-content/uploads/2018/03/65.jpg',
    //                 name: 'Саша',
    //                 followed: true,
    //                 status: 'статус 1',
    //                 location: {country: 'Молдова', city: 'Кишинев'},
    //                 id_user: 1
    //             },
    //             {
    //                 avatarUrl: 'https://peopletalk.ru/wp-content/uploads/2018/03/65.jpg',
    //                 name: 'Аня',
    //                 followed: false,
    //                 status: 'статус 2',
    //                 location: {country: 'ПМР', city: 'Тирасполь'},
    //                 id_user: 2
    //             },
    //             {
    //                 avatarUrl: 'https://peopletalk.ru/wp-content/uploads/2018/03/65.jpg',
    //                 name: 'Лиля',
    //                 followed: true,
    //                 status: 'статус 3',
    //                 location: {country: 'Украина', city: 'Одесса'},
    //                 id_user: 3
    //             },
    //             {
    //                 avatarUrl: 'https://peopletalk.ru/wp-content/uploads/2018/03/65.jpg',
    //                 name: 'Лёня',
    //                 followed: false,
    //                 status: 'статус 4',
    //                 location: {country: 'Россия', city: 'Москва'},
    //                 id_user: 4
    //             },
    //         ]
    //     )
    // }

    const UserItem = (props) => {
        return (
            <div className={s.UserRow} key={props.u.id_user}>
                <div className={s.UserRow_leftColumn}>
                    <div className={s.avatar}>
                        <img src={props.u.avatarUrl} alt=""/>
                    </div>
                    <div>
                        {props.u.followed
                            ?<button onClick={() =>  { props.on_unfollow(props.u.id_user)}  }>unfollow</button>
                            :<button onClick={() =>  { props.on_follow(props.u.id_user)  }  }>follow</button>
                        }
                    </div>
                </div>
                <div className={s.UserRow_rightColumn}>
                    <div className={s.UserRow_rightColumn_top}>
                        <div>{props.u.name}</div>
                        <div>{props.u.location.country}</div>
                    </div>
                    <div className={s.UserRow_rightColumn_mid}>{props.u.location.city}</div>
                    <div className={s.UserRow_rightColumn_bot}>{props.u.status}</div>


                </div>

            </div>
        )

    }

    let users_data = props.users_data.map(item => <UserItem u={item} on_follow={props.on_follow} on_unfollow={props.on_unfollow} />)

    return (
        <div>
            <div className={s.NamePage}>Users</div>
            <div className={s.Users}>
                {users_data}
            </div>
        </div>
    )
}

export default Users;