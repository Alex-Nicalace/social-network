import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav Friends = {props.state.sidebar.friends} />
                <div className='app-wrapper-content'>
                    {/*<Route path='/Profile' component={() =>  <Profile post_elements = {props.post_elements} />}/>*/}
                    <Route path='/Profile' render={() =>  <Profile ProfilePage = {props.state.ProfilePage} />}/>
                    <Route path='/Dialogs' component={() => <Dialogs DialogPage = {props.state.DialogPage} />}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
