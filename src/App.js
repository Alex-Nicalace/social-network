import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Components/Header.jsx";
import Nav from "./Components/Nav.jsx";
import Profile from "./Components/Profile.jsx";

function App() {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
