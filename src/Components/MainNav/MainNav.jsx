import React from 'react';
import obj from './MainNav.module.css';
import MainItem from "./MainItems";
import home from "../Sprities/grey/home_24(solid).png";
import news from "../Sprities/grey/news_24(solid).png";
import friends from "../Sprities/grey/friends_24(solid).png";
import groups from "../Sprities/grey/groups_24(solid).png"
import music from "../Sprities/grey/music_24(solid).png";
import settings from "../Sprities/grey/settings_16.png";
import mes from "../Sprities/grey/messages_24(solid).png";

const MainNav = () => {
    return (
    <nav className={obj.nav}>
        {/*<div><img src={home} alt="" className={obj.home}/><a href="#">Profile</a></div>
        <div><img src={news} alt=""/><a href="#">News</a></div>
        <div><img src={mes} alt=""/><a href="#">Messages</a></div>
        <div><img src={friends} alt=""/><a href="#">Friends</a></div>
        <div><img src={groups} alt=""/><a href="#">Groups</a></div>
        <div><img src={music} alt=""/><a href="#">Music</a></div>
        <div><img src={settings} alt=""/><a href="#">Settings</a></div>*/}
        <MainItem sprite = {home} content = "Profile"/>
        <MainItem sprite = {news} content = "News"/>
        <MainItem sprite = {mes} content = "Messages"/>
        <MainItem sprite = {friends} content = "Friends"/>
        <MainItem sprite = {groups} content = "Groups"/>
        <MainItem sprite = {music} content = "Music"/>
        <MainItem sprite = {settings} content = "Settings"/>
    </nav>);
};

export default MainNav;
