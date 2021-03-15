import React from 'react';
import obj from './Dialog.module.css';
import search from "../../../Sprites/search_16.png";
import pingvin from "../../../Sprites/Dialogs/Пингвинёнок.jpg";
import jiraf from "../../../Sprites/Dialogs/Жираф.jpg";
import {NavLink} from "react-router-dom";
import {openDialogCreator} from "../../../Redux/dialogs_reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";

const ContainerDialog = (props) => {
    let OpenDialog = (obj) => {
        props.dispatch(openDialogCreator(obj));
    }
    return <Dialog OpenDialog = {OpenDialog} ava = {props.ava} link = {props.link} certainDialog = {props.certainDialog} certainMessage = {props.certainMessage}/>
};


export default ContainerDialog;
