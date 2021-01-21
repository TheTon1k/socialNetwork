import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {max, required} from "../../utils/validators";

const max50 = max(50)

const NewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'} validate={[required,max50]}/>
            <div><button>Send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(NewMessageForm)



const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}
                                                                         avatarSrc={d.avatarSrc}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    let addNewMessage =(values)=>{
        props.addNewMessage(values.newMessageBody)
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;