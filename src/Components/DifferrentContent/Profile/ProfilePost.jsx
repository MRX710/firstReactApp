import React from 'react';
import obj from './ProfilePost.module.css';
import {NavLink} from "react-router-dom";


const ProfilePost = (props) => {


    return (
        <NavLink to={"/profile/" + props.link}>
            <section className={obj.post}>
                <div>{props.title}</div>
                <div>{props.text}</div>
                <div>{props.likeCount}</div>
            </section>
        </NavLink>
    )
}

export default ProfilePost;
