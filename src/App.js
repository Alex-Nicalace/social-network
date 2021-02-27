import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import {BrowserRouter, Route} from "react-router-dom"
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {
    return (
        // <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav Friends={props.store.getState().sidebar.friends}/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/Profile' component={() =>  <Profile post_elements = {props.post_elements} />}/>*/}
                    <Route path='/Profile'
                           render={() => <Profile store={props.store}/>} />

                    <Route path='/Dialogs'
                           render={() => <DialogsContainer store={props.store}
                           />}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        // </BrowserRouter>
    );
}

export default App;
