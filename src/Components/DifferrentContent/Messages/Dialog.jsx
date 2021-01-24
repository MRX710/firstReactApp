import React from 'react';
import obj from './Dialog.module.css';
import search from "../../../Sprites/search_16.png";
import pingvin from "../../../Sprites/Dialogs/Пингвинёнок.jpg";
import jiraf from "../../../Sprites/Dialogs/Жираф.jpg";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <section className={obj.dialog}>
            <div className={obj.photo}>
                <img src={props.ava} alt="avatarka"/>
            </div>
            <NavLink to={"/messages/" + props.link}>
                <div className={obj.dialogName}><p>{props.certainDialog}</p></div>
                <div className={obj.message}><p>{props.certainMessage}</p></div>
            </NavLink>
        </section>
    )
};

export default Dialog;
