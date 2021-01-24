import React from 'react';
import obj from './Messages.module.css';
import search from "../../../Sprites/search_16.png";
import pingvin from "../../../Sprites/Dialogs/Пингвинёнок.jpg";
import jiraf from "../../../Sprites/Dialogs/Жираф.jpg";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog";

const Messages = () => {
    return (
        <section className={obj.dialogs}>
            <div className={obj.dialogSearch}>
                <form action="/" className={obj.search}>
                    <img src={search} alt="dialog-search"/>
                    <input type="search"  placeholder="Search"/>
                </form>
            </div>
            <Dialog ava={pingvin} link={"1"} certainDialog={"With myself"} certainMessage={"Hi!It's me!"}/>
            <Dialog ava={jiraf} link={"2"} certainDialog={"Friend"} certainMessage={"Hi!What's up?"}/>
        </section>
    )
};

export default Messages;
