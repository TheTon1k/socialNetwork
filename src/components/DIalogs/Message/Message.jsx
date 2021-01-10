import React from 'react'
import s from '../Dialogs.module.css'

const Message = (props) => {
    if (props.id !== 0) return <div className={s.friendMessage}>{props.message}</div>
    else return <div className={`${s.accMessage}`}>{props.message}</div>
}


export default Message;