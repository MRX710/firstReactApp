import React from 'react';
import obj from './MainNav.module.css';
import MainItem from "./MainItems";
import home from "../../Sprites/home_24(solid).png";
import news from "../../Sprites/news_24(solid).png";
import friends from "../../Sprites/friends_24(solid).png";
import groups from "../../Sprites/groups_24(solid).png"
import music from "../../Sprites/music_24(solid).png";
import settings from "../../Sprites/settings_16.png";
import mes from "../../Sprites/messages_24(solid).png";

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
        <MainItem link = "/profile" sprite = {home} content = "Profile"/>
        <MainItem sprite = {news} content = "News"/>
        <MainItem link = "/messages" sprite = {mes} content = "Messages"/>
        <MainItem sprite = {friends} content = "Friends"/>
        <MainItem sprite = {groups} content = "Groups"/>
        <MainItem sprite = {music} content = "Music"/>
        <MainItem sprite = {settings} content = "Settings"/>
    </nav>);
};

export default MainNav;
