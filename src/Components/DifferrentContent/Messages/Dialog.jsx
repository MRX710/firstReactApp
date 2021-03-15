import React from 'react';
import obj from './Dialog.module.css';
import search from "../../../Sprites/search_16.png";
import pingvin from "../../../Sprites/Dialogs/Пингвинёнок.jpg";
import jiraf from "../../../Sprites/Dialogs/Жираф.jpg";
import {NavLink} from "react-router-dom";
import {openDialogCreator} from "../../../Redux/dialogs_reducer";

const Dialog = (props) => {
    let onClickDialog = () => {
        let object = {ava: props.ava, id: props.link, who:props.certainDialog, message:props.certainMessage}
        props.OpenDialog(object);
    }
    return (
        <NavLink to={"/messages/" + props.link} onClick = {onClickDialog} className={obj.dialog}>
            <div className={obj.photo}>
                <img src={props.ava} alt="avatarka"/>
            </div>
            <div className={obj.dialogName}><p>{props.certainDialog}</p></div>
            <div className={obj.message}><p>{props.certainMessage}</p></div>
        </NavLink>
    )
};

export default Dialog;
