const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let InitialState = {
    users_data: [
/*        {
            avatarUrl: 'https://peopletalk.ru/wp-content/uploads/2018/03/65.jpg',
            name: 'Саша',
            followed: true,
            status: 'статус 1',
            location: {country: 'Молдова', city: 'Кишинев'},
            id_user: 1
        },
        {
            avatarUrl: 'https://peopletalk.ru/wp-content/uploads/2018/03/65.jpg',
            name: 'Аня',
            followed: false,
            status: 'статус 2',
            location: {country: 'ПМР', city: 'Тирасполь'},
            id_user: 2
        },
        {
            avatarUrl: 'https://peopletalk.ru/wp-content/uploads/2018/03/65.jpg',
            name: 'Лиля',
            followed: true,
            status: 'статус 3',
            location: {country: 'Украина', city: 'Одесса'},
            id_user: 3
        },
        {
            avatarUrl: 'https://peopletalk.ru/wp-content/uploads/2018/03/65.jpg',
            name: 'Лёня',
            followed: false,
            status: 'статус 4',
            location: {country: 'Россия', city: 'Москва'},
            id_user: 4
        },*/
    ]
}

const usersReducer = (state = InitialState, action) => {
    debugger;
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users_data: state.users_data.map(item => {
                    if (item.id_user === action.id_user) {
                        return {...item, followed: true}
                    }
                    return item;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users_data: state.users_data.map(item => {
                    if (item.id_user === action.id_user) {
                        return {...item, followed: false}
                    }
                    return item;
                })
            }
        case SET_USERS: {
            return {...state, users_data: [ ...state.users_data, ...action.users_data] }
        }
        default:
            return state;
    }

}

export default usersReducer;

export const followAC = (id_user) => ({type: FOLLOW, id_user});
export const unfollowAC = (id_user) => ({type: UNFOLLOW, id_user});
export const setUsersAC = (users_data) => ({type: SET_USERS, users_data})