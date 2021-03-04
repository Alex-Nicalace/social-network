// import React from "react";
// import {
//     SetPost_ActionCreate,
//     SetPostCurrent_ActionCreate
// } from "../../../Redux/profile-reducer";
// import MyPosts from "./MyPosts";
// import {connect} from "react-redux";
//
// let mapStateToProps = (state) => {
//     return {
//         post_data: state.ProfilePage.post_data,
//         current_post: state.ProfilePage.current_post,
//     }
// }
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         OnAddPost: () => {
//             let action = SetPost_ActionCreate();
//             dispatch(action);
//         },
//         OnChangeTextArea: (text) => {
//             let action = SetPostCurrent_ActionCreate(text);
//             dispatch(action);
//         }
//     }
//
// }
//
// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
//
// export default MyPostsContainer;