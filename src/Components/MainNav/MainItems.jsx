import React from 'react';
import obj from './MainItems.module.css';
import {NavLink} from "react-router-dom";


const MainItem = (props) => {
    return (
    <div className={obj.item}>
        <img src={props.sprite} alt=""/>
        <NavLink to={props.link}>{props.content}</NavLink>
    </div>
    )
};

export default MainItem;
