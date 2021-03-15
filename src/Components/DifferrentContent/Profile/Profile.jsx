import React from 'react';
import obj from './Profile.module.css';
import ProfilePosts from "./MyProfilePosts";
import ProfilePost from "./ProfilePost";
import location from "../../../Sprites/Location.png";
import call from "../../../Sprites/Call.png";
import earth from "../../../Sprites/earth_24.png";
import themes from "../../../Sprites/tips-tricks.png";
import ContainerMyProfilePosts from "./ContainerMyProfilePosts";

const Profile = (props) => {


    return <section className={obj.Myprofile}>
        {/*<div><img src="/" alt=""/></div>*/}
        <section className={obj.aboutMe}></section>
        <ContainerMyProfilePosts store = {props.store} />
    </section>;
}

export default Profile;
