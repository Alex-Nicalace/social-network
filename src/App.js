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

function App() {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/Dialogs' component={Dialogs}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
