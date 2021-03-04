const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT_USER = 'SET_COUNT_USER';

let InitialState = {
    items: [
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
    ],
    countUser: 0,
    sizePage: 10,
    currentPage: 1,
}

const usersReducer = (state = InitialState, action) => {
    debugger;
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: true}
                    }
                    return item;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: false}
                    }
                    return item;
                })
            }
        case SET_USERS: {
            return {...state, items: [ ...action.items] }
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_COUNT_USER:{
            return {...state, countUser: action.count}
        }
        default:
            return state;
    }

}

export default usersReducer;

export const followAC = (id) => ({type: FOLLOW, id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id});
export const setUsersAC = (items) => ({type: SET_USERS, items});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setCountUserAC = (count) => ({type: SET_COUNT_USER, count})