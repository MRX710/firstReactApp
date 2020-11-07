import React from 'react';
import obj from './MainNav.module.css';

const MainNav = () => {
    return <nav className={obj.nav}>
        <div><a href="#">Profile</a></div>
        <div><a href="#">Messages</a></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Settings</a></div>
    </nav>
};

export default MainNav;
