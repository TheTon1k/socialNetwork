import React from 'react';
import {newPostActionCreator, updatePostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";


const MyPostsWrapper = (props) => {
    let posts = props.store.getState().profilePage.posts
    let newPostText = posts.newPostText

    let addPost = () => {
        props.store.dispatch(newPostActionCreator())
    }
    let PostChange = (text) => {
        props.store.dispatch(updatePostActionCreator(text))
    }

    return (<MyPosts addPost={addPost} postChange={PostChange} posts={posts} newPostText ={newPostText}/>)

}

export default MyPostsWrapper;