import React from 'react';
import {NavLink} from "react-router-dom";
import obj from "./OpenDialog.module.css"

const OpenDialog = (props) => {

    // dataDrUSer =  {props._state.dialogsPage.friends} link = {props._state.dialogsPage.currentDialogId}
    //
    // let i = props.state.currentDialogId - 1;
    return (
        <NavLink to={"/messages/" + props.state.id }>
            <div>
                <img src={props.state.ava} alt="avatarka"/>
            </div>
            <div><p>{props.state.who}</p></div>
            <div><p>{props.state.message}</p></div>
            <div><textarea></textarea></div>
            <div><button></button></div>
        </NavLink>
    )
};

export default OpenDialog;
