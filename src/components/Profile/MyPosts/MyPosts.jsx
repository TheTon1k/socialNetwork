import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, Formik} from "formik";
import {validationPostsandDialogsForm} from "../../../utils/validators";
import errorStyle from "../../../utils/ErorsValidate.module.css"


const AddNewPostForm = (props) => {
    return <Formik
        initialValues={{newPostText: ''}}
        validateOnBlur
        validationSchema={validationPostsandDialogsForm}
        onSubmit={(values) => {
            props.addNewPost(values.newPostText)
        }}>
        {({values, handleSubmit, handleChange, handleBlur, touched, errors, isValid}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component='input' onChange={handleChange} onBlur={handleBlur} value={values.message}
                           className={errors.newPostText && errorStyle.error} name={'newPostText'}/>
                    {touched.newPostText && errors.newPostText &&
                    <span className={errors.newPostText && errorStyle.errorMessage}> {errors.newPostText}</span>}
                    <p>
                        <button disabled={!values.newPostText || !isValid} type={'submit'}>Отправить</button>
                    </p>
                </div>
            </form>)}
    </Formik>

}
const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostForm addNewPost={props.addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;