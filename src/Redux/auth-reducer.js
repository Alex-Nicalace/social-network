import {authAPI} from "../API/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_WAS_QUERY = 'TOGGLE_IS_WAS_QUERY';

let InitialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    isWasQuery: false,
}

const authReducer = (state = InitialState, action) => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case TOGGLE_IS_FETCHING:{
            return{
                ...state,
                isFetching: action.isFetching,
            }
        }
        case TOGGLE_IS_WAS_QUERY:{
            return{
                ...state,
                isWasQuery: action.isWasQuery,
            }
        }
        default:
            return state;

    }
}

export default authReducer;

export const setAuthUserData = (userId, email, login) => ({type:SET_AUTH_USER_DATA, data:{userId, email, login}})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleIsWasQuery = (isWasQuery) => ({type:TOGGLE_IS_WAS_QUERY, isWasQuery})

export const getMe = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    debugger
    authAPI.getMe().then(data => {
        debugger
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login));
        }
        dispatch(toggleIsWasQuery(true));
        dispatch(toggleIsFetching(false));
    })
}