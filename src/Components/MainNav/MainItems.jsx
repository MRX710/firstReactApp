import React from 'react';
import obj from './MainItems.module.css';

const MainItem = (props) => {
    return (
    <div className={obj.item}>
        <img src={props.sprite} alt=""/>
        <a href={props.link}>{props.content}</a>
    </div>
    )
};

export default MainItem;
