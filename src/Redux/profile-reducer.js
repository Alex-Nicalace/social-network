const SETPOST = 'SET-POST';
const SETPOSTCURRENT = 'SET-POST-CURRENT';

let InitialState = {
    post_data: [
        {message: 'test', likeCount: '6', id_post: "1"},
        {message: 'how are you', likeCount: '5', id_post: "2"},
        {message: 'react', likeCount: '4', id_post: "3"},
        {message: 'boy', likeCount: '3', id_post: "4"},
        {message: 'girl', likeCount: '2', id_post: "5"}
    ],
    _current_post: 'Hello !!!',
}

const profileReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SETPOST:
            let ObjMess = {message: state._current_post, likeCount: '0', id_post: "6"};
            state.post_data.push(ObjMess);
            state._current_post = '';
            //this._RerenderDOM(this._state);
            break
        case SETPOSTCURRENT:
            state._current_post = action.post;
            break
    }
    return state;
}

export default profileReducer;

export const SetPost_ActionCreate = () => ({type: SETPOST});
export const SetPostCurrent_ActionCreate = (text) => ({type: SETPOSTCURRENT, post: text});