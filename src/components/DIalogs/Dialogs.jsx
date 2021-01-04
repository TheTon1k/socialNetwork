import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Антон'},
        {id: 2, name: 'Наташа'},
        {id: 3, name: 'Игорь'},
        {id: 4, name: 'Виктор'},
        {id: 5, name: 'Дмитрий'},
        {id: 6, name: 'Котик'},
    ]

    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YO'},
    ]
    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;