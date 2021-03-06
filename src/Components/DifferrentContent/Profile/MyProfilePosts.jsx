import React from 'react';
import obj from './MyPosts.module.css';
import ProfilePost from "./ProfilePost";


const ProfilePosts = (props) => {

    let newPostEltTitle = React.createRef();
    let newPostEltText = React.createRef();

    let OnAddPost = () => {
        props.addPost();
    }

    let posts = props.profilePage.postData.map(
        p => <ProfilePost link={p.id} title={p.title} text={p.text} likeCount={p.likeCount}/>
    );

    let onPostChangeTitle = () =>
    {
        props.ChangePostTitle(newPostEltTitle.current.value);
    }
    let onPostChangeText = () =>
    {
        props.ChangePostText(newPostEltText.current.value);
    }

    return <section>
        <div className={obj.newPost}>
            <div className={obj.button}>
                <button onClick={OnAddPost} >Add Post </button>
            </div>
            <div className={obj.title}> <textarea onChange = {onPostChangeTitle} value = {props.profilePage.newPost.newPostTitle}  ref={newPostEltTitle}  placeholder="Title of your Post... "></textarea></div>
            <div className={obj.wrtPost}><textarea onChange = {onPostChangeText}   value = {props.profilePage.newPost.newPostText} ref = {newPostEltText}  placeholder="Write and public your Post..."></textarea></div>
        </div>
        {posts}
    </section>;
}

export default ProfilePosts;
