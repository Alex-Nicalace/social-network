const SET_POST = 'SET-POST';
const SET_POST_CURRENT = 'SET-POST-CURRENT';
const SET_PROFILE = 'SET_PROFILE';

let InitialState = {
    post_data: [
        {message: 'test', likeCount: '6', id_post: "1"},
        {message: 'how are you', likeCount: '5', id_post: "2"},
        {message: 'react', likeCount: '4', id_post: "3"},
        {message: 'boy', likeCount: '3', id_post: "4"},
        {message: 'girl', likeCount: '2', id_post: "5"}
    ],
    current_post: 'Hello !!!',
    profile:null,
}

const profileReducer = (state = InitialState, action) => {
    debugger;
    switch (action.type) {
        case SET_POST:
            let ObjMess = {message: state.current_post, likeCount: '0', id_post: "6"};
            return  {
                ...state,
                post_data: [...state.post_data, ObjMess],
                current_post: ''
            };
        case SET_POST_CURRENT:
            return {
                ...state,
                current_post: action.post
            }
        case SET_PROFILE:{
            return{
                ...state,
                profile: {...action.profile},
            }
        }
        default:
            return state;
    }

}

export default profileReducer;

export const SetPost = () => ({type: SET_POST});
export const SetPostCurrent = (text) => ({type: SET_POST_CURRENT, post: text});
export const SetProfile = (profile) => ({type: SET_PROFILE, profile})