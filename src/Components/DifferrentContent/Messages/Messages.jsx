import React from 'react';
import obj from './Messages.module.css';
import search from "../../../Sprites/search_16.png";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog";
import ContainerDialog from "./ContainerDialog";


const Messages = (props) => {

    let dialogs = props.dialogsData.map(
        d => <ContainerDialog dispatch={props.dispatch} ava={d.ava} link={d.id} certainDialog={d.who} certainMessage={d.message}/>
    );


    return (
        <section className={obj.dialogs}>

            <div className={obj.dialogSearch}>
                <form action="/" className={obj.search}>
                    <img src={search} alt="dialog-search"/>
                    <input type="search" placeholder="Search"/>
                </form>
            </div>
            {dialogs}
        </section>
    )
};

export default Messages;
