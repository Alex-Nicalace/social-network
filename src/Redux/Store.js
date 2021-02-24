import React from "react";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";


//***********************************************
//Значение this – это объект «перед точкой», который использовался для вызова метода.
//***********************************************

const GETPOSTCURRENT = 'GET-POST-CURRENT';
const GETMESSAGECURRENT = 'GET-MESSAGE-CURRENT';

let store = {
    _state: {
        ProfilePage: {
            post_data: [
                {message: 'test', likeCount: '6', id_post: "1"},
                {message: 'how are you', likeCount: '5', id_post: "2"},
                {message: 'react', likeCount: '4', id_post: "3"},
                {message: 'boy', likeCount: '3', id_post: "4"},
                {message: 'girl', likeCount: '2', id_post: "5"}
            ],
            _current_post: 'Hello !!!',
        },
        DialogPage: {
            dialog_data: [
                {
                    name_user: "Sasha",
                    id_user: "1",
                    url_ava: 'http://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'
                },
                {
                    name_user: "Sveta",
                    id_user: "2",
                    url_ava: 'https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg'
                },
                {
                    name_user: "Makar",
                    id_user: "3",
                    url_ava: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg'
                },
                {name_user: "Ivan", id_user: "4", url_ava: 'https://download-cs.net/steam/avatars/3426.jpg'},
                {
                    name_user: "Anna",
                    id_user: "5",
                    url_ava: 'https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png'
                }
            ],
            message_data: [
                {message: "Hi", id_mes: "1", is_my: "1", id_user: "1"},
                {message: "How are you?", id_mes: "2", is_my: "0", id_user: "1"},
                {message: "Здравствуйте!", id_mes: "3", is_my: "1", id_user: "1"},
                {message: "Кто ты?", id_mes: "4", is_my: "1", id_user: "1"},
                {message: "Откуда ...!", id_mes: "5", is_my: "1", id_user: "1"},
                {message: "От верблюда", id_mes: "5", is_my: "0", id_user: "1"},
            ],
            _message_current: 'Hi friends!!!',
        },
        sidebar: {
            friends: [
                {friend_name: "Sasha", url_ava: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg"},
                {friend_name: "Masha", url_ava: "https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png"},
                {
                    friend_name: "Anna",
                    url_ava: "https://shutniki.club/wp-content/uploads/2019/12/0aeb27b230deae824f3d1bce090bc2e9.png"
                },
            ]
        }
    },
    _RerenderDOM() {
        //заглушка
    },

    subscribe(observer) {
        this._RerenderDOM = observer;
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        switch (action.type) {
            case GETPOSTCURRENT:
                return this._state.ProfilePage._current_post;
                break

            case GETMESSAGECURRENT:
                return this._state.DialogPage._message_current;
                break;
        }
        this._state.DialogPage = dialogReducer (this._state.DialogPage, action);
        this._state.ProfilePage = profileReducer (this._state.ProfilePage, action);
        this._RerenderDOM(this._state);
    },

}

export default store;
window.store = store; //  у меня и без этого работает. не заметил когда он это вставил

// export const SetPost_ActionCreate = () => ({type:SETPOST});
// export const SetPostCurrent_ActionCreate = (text) => ({type:SETPOSTCURRENT, post: text});
// export const GetPostCurrent_ActionCreate = () => ({type:GETPOSTCURRENT});

// export const SetMessage_ActionCreate = () => ({type:SETMESSAGE});
// export const SetMessageCurrent_ActionCreate = (text) => ({type:SETMESSAGECURRENT, message: text});
// export const GetMessageCurrent_ActionCreate = () => ({type:GETMESSAGECURRENT});