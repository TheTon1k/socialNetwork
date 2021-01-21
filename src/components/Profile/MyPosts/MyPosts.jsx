import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {max, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const max10 =max(10)

const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={Textarea} name={'newPostBody'} placeholder={'Enter your message'} validate={[required,max10]}/>
            <div>
                <button>Post</button>
            </div>
        </form>

    )
}
const AddPostFormRedux = reduxForm({form:'addPostForm'})(NewPostForm)

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    let addNewPost =(values)=>{

        props.addNewPost(values.newPostBody)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;