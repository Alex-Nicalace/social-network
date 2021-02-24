const SETMESSAGE = 'SET-MESSAGE';
const SETMESSAGECURRENT = 'SET-MESSAGE-CURRENT';
const GETMESSAGECURRENT = 'GET-MESSAGE-CURRENT';

let InitialState = {
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
}

const dialogReducer = (state = InitialState, action) => {
    debugger;
    switch (action.type) {
        case SETMESSAGE:
            let obj_tmp = {message: state._message_current, id_mes: "6", is_my: "1", id_user: "1"};
            state.message_data.push(obj_tmp);
            state._message_current = '';
            break;
        case SETMESSAGECURRENT:
            state._message_current = action.message;
            break;
    }
    return state;
}

export default dialogReducer;

export const SetMessage_ActionCreate = () => ({type: SETMESSAGE});
export const SetMessageCurrent_ActionCreate = (text) => ({type: SETMESSAGECURRENT, message: text});
export const GetMessageCurrent_ActionCreate = () => ({type: GETMESSAGECURRENT});