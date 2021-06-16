import React from 'react';
import style from './User.module.css';



const User = (props) => {
    let images = props.user.photos.map( p => <div className={style.userPhoto}><img src={p} alt="personal-photo"/></div>);
    let buttonText;
    if (props.user.action === " ") buttonText = (props.user.followed) ? "Followed" : "Follow";
    else buttonText = props.user.actionType;

    let onClickFollow = () => {
        if (buttonText === "Unfollow") props.unfollow(props.user.id); //buttonText = "Follow";}
        else if (buttonText === "Follow") props.follow(props.user.id); //buttonText = "Followed";}
    }
    let cancelSubscribe = () => {
        if (buttonText === "Followed") props.tryToAction(props.user.id, "Unfollow") // buttonText =  "Unfollow";
        else if (buttonText === "Unfollow") props.tryToAction(props.user.id, "Followed")  //buttonText = "Followed";
        // changeThemeButton();
    }
    /*let changeThemeButton = () => {
        let buttonPurchase = document.getElementById(`${props.user.id}`)
        let style = buttonPurchase.style;

        switch(buttonText) {
            case "Followed":
                // buttonPurchase.classList.add("userInfo__followButton_active")

                style.backgroundColor = "rgba(0 28 61 0.05)";
                style.color = "#5181b8";
                return 0;
            default:

                style.backgroundColor = "#5181b8";
                style.color = "white";
                return 0;
        }

    }*/



    return (
    <div className={style.user} key={props.user.id}>
        <div className={style.userInfo}>
            <div className={style.photo}><img src={props.user.photo} alt="ava"/></div>
            <div className={style.userInfo__fullName}>{props.user.fullName}</div>
            <div className={style.userInfo__addtInfo}>{props.user.addtInfo}</div>
            <div className={style.followOr}>

                {
                    (buttonText === "Followed") ?
                        <button id={props.user.id}  className={`${style.userInfo__followButton} ${style.userInfo__followButton_active}`}
                                onClick={onClickFollow}>{buttonText}</button>

                        : <button id={props.user.id} className={style.userInfo__followButton}
                                  onClick={onClickFollow}>{buttonText}</button>
                }
                <button className={style.userInfo__cancelButton} onClick={cancelSubscribe} ></button>
            </div>

        </div>
        <div className={style.userPhotos}>
        {images}
        </div>
    </div>
    )
};

export default User;
