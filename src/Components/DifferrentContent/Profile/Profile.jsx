import React from 'react';
import obj from './Profile.module.css';
import ProfilePost from "./ProfilePost";
import location from "../../../Sprites/Location.png";
import call from "../../../Sprites/Call.png";
import earth from "../../../Sprites/earth_24.png";
import themes from "../../../Sprites/tips-tricks.png";

const Profile = (props) => {


    let posts = props.postData.map(
        p => <ProfilePost link={p.id} title={p.title} text={p.text} likeCount={p.likeCount}/>
    );

    return <section>
        <div className={obj.newPost}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button onClick={() => {alert("Hey, Developer!")}}>Add Post</button>
            </div>
        </div>
        {posts}
    </section>;
}

export default Profile;
