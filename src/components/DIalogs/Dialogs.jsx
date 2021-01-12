import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatarSrc={d.avatarSrc}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    let onNewMessage = () => {
        props.newMessage()
    }
    let onChangeMessageText = (e) => {
        let text = e.target.value
        props.changeMessageText(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onChangeMessageText} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={onNewMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;