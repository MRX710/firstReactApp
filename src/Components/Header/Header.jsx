import React from 'react';
import obj from './Header.module.css';
import vk from "../../Sprites/Logo 1.png";
import search from "../../Sprites/Search.png"
import ding from "../../Sprites/ding-dang.png";
import left from "../../Sprites/player_back_24(solid).png";
import play from "../../Sprites/player_play_24(solid).png";
import right from "../../Sprites/player_next_24(solid).png"
import info_profile from "../../Sprites/arrow_header.png";
import profile_photo from "../../Sprites/Ellipse 1.png";


const Header = () => {
    return (
        <header className={obj.header}>
            <div className={obj.headerContent}>
                {/*<p className={obj.logoVk}>VK</p>*/}
                <img className={obj.logoVk} src={vk} alt="logo"/>
                <div className={obj.search}>
                    <img src={search} alt="search"/>
                    <p>Search</p>
                </div>
                <img src={ding} alt="ding" className={obj.ding}/>
                <img src={left} alt="listback" className={obj.listback}/>
                <img src={play} alt="play" className={obj.play}/>
                <img src={right} alt="listforward" className={obj.listforward}/>
                <div className={obj.titleSong}></div>
                <div className={obj.userinfo}>
                    <div className={obj.username}>Username</div>
                    <div className={obj.userbody}>
                        <img src={profile_photo} alt="photoPerson" className={obj.image_profile}/>
                        <img src={info_profile} alt="profile_info" className={obj.profile_info}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;