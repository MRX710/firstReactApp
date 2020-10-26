import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
