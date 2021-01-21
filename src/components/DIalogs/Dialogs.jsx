import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {FastField, Formik} from "formik";
import {validationPostsandDialogsForm} from "../../utils/validators";

const NewMessageForm = (props) => {

    return <Formik
        initialValues={{message: ''}}
        validationSchema={validationPostsandDialogsForm}
        validateOnBlur
        onSubmit={(values) => {
            props.addNewMessage(values.message)
        }}>
        {({values, handleSubmit, handleChange,errors, touched,handleBlur,isValid}) => (
            <form onSubmit={handleSubmit}>
                <div><FastField  onChange={handleChange} onBlur={handleBlur} value={values.message} name={'message'} type={'text'}/>
                    <button disabled={!values.message || !isValid} type={'submit'}>Отправить</button>
                </div>
                {touched.message&&errors.message&&<span>{errors.message}</span>}
            </form>)}
    </Formik>
}


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}
                                                                         avatarSrc={d.avatarSrc}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <NewMessageForm addNewMessage={props.addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;