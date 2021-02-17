import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./Components/Profile/MyPosts/Post/Post";
import DialogItem from "./Components/Dialogs/DialogItem/DialogItem";
import MessageItem from "./Components/Dialogs/MessageItem/MessageItem";

let post_data = [
    {message: 'test', likeCount: '6', id_post: "1"},
    {message: 'how are you', likeCount: '5', id_post: "2"},
    {message: 'react', likeCount: '4', id_post: "3"},
    {message: 'boy', likeCount: '3', id_post: "4"},
    {message: 'girl', likeCount: '2', id_post: "5"}
]
let post_elements = post_data.map(item => <Post message={item.message} likeCount={item.likeCount} />)

let dialog_data = [
    {name_user: "Sasha", id_user: "1"},
    {name_user: "Sveta", id_user: "2"},
    {name_user: "Makar", id_user: "3"},
    {name_user: "Ivan", id_user: "4"},
    {name_user: "Anna", id_user: "5"}
]
let dialog_Elements = dialog_data.map(item => <DialogItem name_user={item.name_user} id_user={item.id_user}/>)

let message_data = [
    {message:"Hi", id_mes:"1"},
    {message:"How are you?", id_mes: "2"},
    {message:"Здравствуйте!", id_mes: "2"}
]
let message_elements = message_data.map(item => <MessageItem message={item.message}/>)

ReactDOM.render(
  <React.StrictMode>
    <App post_elements = {post_elements} dialog_Elements = {dialog_Elements} message_elements = {message_elements} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
