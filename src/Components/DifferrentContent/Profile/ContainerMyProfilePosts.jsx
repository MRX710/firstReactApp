import React from 'react';
import {
    addPostCreater,
    updateTextNewPostActionCreator,
    updateTitleNewPostActionCreator
} from "../../../Redux/profile_reducer";
import ProfilePosts from "./MyProfilePosts";
import connect from "react-redux/lib/connect/connect";



// const ContainerMyProfilePosts = (props) => {
//
//     let state = props.store.getState().profilePage
//
//
//     let addPost = () => {
//         props.store.dispatch(addPostCreater());
//     }
//
//     let ChangePostTitle = (title) =>
//     {
//         props.store.dispatch(updateTitleNewPostActionCreator(title));
//     }
//     let ChangePostText = (text) =>
//     {
//         props.store.dispatch(updateTextNewPostActionCreator(text));
//     }
//
//     return <ProfilePosts state = {state} ChangePostTitle = {ChangePostTitle} ChangePostText = {ChangePostText} addPost = {addPost}/>
// }

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ChangePostTitle: (title) => {
            dispatch(updateTitleNewPostActionCreator(title));
        },
        ChangePostText: (text) => {
            dispatch(updateTextNewPostActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreater());
        }
    }
}

const ContainerMyProfilePosts = connect(mapStateToProps,mapDispatchToProps)(ProfilePosts)


export default ContainerMyProfilePosts;
