import {folllowAPI, usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT_USER = 'SET_COUNT_USER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

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
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = InitialState, action) => {
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
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOWING_IN_PROGRESS:{
            //debugger;
            return{...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(item => item != action.userId)}
        }
        default:
            return state;
    }

}

export default usersReducer;

export const follow = (id) => ({type: FOLLOW, id});
export const unfollow = (id) => ({type: UNFOLLOW, id});
export const setUsers = (items) => ({type: SET_USERS, items});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setCountUser = (count) => ({type: SET_COUNT_USER, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})

export const getUsers = (pageSize, currentPage) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(pageSize, currentPage).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setCountUser(data.totalCount));
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false));
    })
}

export const deleteFollow = (id) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id));
    folllowAPI.unfollow(id).then(resultCode => {
        if (resultCode === 0) {
            dispatch(unfollow(id))
        }
        //когда пришел ответ тогда снимать дизэйбл
        dispatch(toggleFollowingInProgress(false, id));
    })
}

export const setFollow = (id) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id));
    folllowAPI.follow(id).then(resultCode => {
        if (resultCode === 0) {
            dispatch(follow(id))
        }
        //когда пришел ответ тогда снимать дизэйбл
        dispatch(toggleFollowingInProgress(false, id));
    })
}

