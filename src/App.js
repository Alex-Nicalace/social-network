import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import {Route} from "react-router-dom"
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                {/*<Route path='/Profile' component={() =>  <Profile post_elements = {props.post_elements} />}/>*/}
                <Route path='/Profile' render={() => <Profile/>}/>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
                <Route path='/Music' component={Music}/>
                <Route path='/News' component={News}/>
                <Route path='/Settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
