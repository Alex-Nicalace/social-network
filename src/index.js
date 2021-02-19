import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./Components/Profile/MyPosts/Post/Post";
import DialogItem from "./Components/Dialogs/DialogItem/DialogItem";
import MessageItem from "./Components/Dialogs/MessageItem/MessageItem";
import state from './Redux/State'


// let post_elements = post_data.map(item => <Post message={item.message} likeCount={item.likeCount} />)
//
//
// let dialog_Elements = dialog_data.map(item => <DialogItem name_user={item.name_user} id_user={item.id_user}/>)
//
//
// let message_elements = message_data.map(item => <MessageItem message={item.message}/>)

ReactDOM.render(
  <React.StrictMode>
    <App state = {state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
