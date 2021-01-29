import React from 'react';
import obj from './Profile.module.css';
import ProfilePost from "./ProfilePost";
import location from "../../../Sprites/Location.png";
import call from "../../../Sprites/Call.png";
import earth from "../../../Sprites/earth_24.png";
import themes from "../../../Sprites/tips-tricks.png";

const Profile = (props) => {

    let newPostEltTitle = React.createRef();
    let newPostEltText = React.createRef();

    let addPost = () => {
        let title = newPostEltTitle.current.value;
        let text = newPostEltText.current.value;
        props.addPost(title,text);
    }

    let posts = props.postData.map(
        p => <ProfilePost link={p.id} title={p.title} text={p.text} likeCount={p.likeCount}/>
    );

    return <section className={obj.Myprofile}>
        <div className={obj.newPost}>
            <div> <textarea ref={newPostEltTitle} className={obj.title} placeholder="Title of your Post... "></textarea></div>
            <div><textarea ref = {newPostEltText} className={obj.wrtPost} placeholder="Write and public your Post..."></textarea></div>
            <div>
                <button onClick={addPost} >Add Post </button>
            </div>
        </div>
        {posts}
    </section>;
}

export default Profile;
