import React from 'react';
import style from './User.module.css';


class User extends React.Component {

    images = this.props.user.photos.map(p => <div className={style.userPhoto}><img src={p} alt="personal-photo"/>
    </div>);
    buttonState = "";

    checkStateButton = () => {
        if (this.buttonState === "") this.buttonState = (this.props.user.followed) ? "Followed" : "Follow";
    }
    onClickFollow = () => {
        if (this.buttonState === "Unfollow") {
            this.props.unfollow(this.props.user.id);
            this.buttonState = "Follow";
        } else if (this.buttonState === "Follow") {
            this.props.follow(this.props.user.id);
            this.buttonState = "Followed";
        }
    }
    cancelSubscribe = () => {
        if (this.buttonState === "Followed") {
            this.props.updateDefault();
            this.buttonState = "Unfollow";
        } else if (this.buttonState === "Unfollow") {
            this.props.updateDefault();
            this.buttonState = "Followed";
        }
    }


    render() {
        this.checkStateButton();
        return (
            <div className={style.user} key={this.props.user.id}>
                <div className={style.userInfo}>
                    <div className={style.photo}><img src={this.props.user.photo} alt="ava"/></div>
                    <div className={style.userInfo__fullName}>{this.props.user.fullName}</div>
                    <div className={style.userInfo__addtInfo}>{this.props.user.addtInfo}</div>
                    <div className={style.followOr}>

                        {
                            (this.buttonState === "Followed") ?
                                <button id={this.props.user.id}
                                        className={`${style.userInfo__followButton} ${style.userInfo__followButton_active}`}
                                        onClick={this.onClickFollow}>{this.buttonState}</button>

                                : <button id={this.props.user.id} className={style.userInfo__followButton}
                                          onClick={this.onClickFollow}>{this.buttonState}</button>
                        }
                        <button className={style.userInfo__cancelButton} onClick={this.cancelSubscribe}></button>
                    </div>

                </div>
                <div className={style.userPhotos}>
                    {this.images}
                </div>
            </div>
        );
    }
}

export default User;
