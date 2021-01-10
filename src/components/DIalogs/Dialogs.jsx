import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatarSrc={d.avatarSrc}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef();

    let newMessage = ()=>{
        let text = newMessageElement.current.value
        props.addMessage(text)
    }
    let onChangeMessageText =()=>{
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onChangeMessageText} ref={newMessageElement} value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={newMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;