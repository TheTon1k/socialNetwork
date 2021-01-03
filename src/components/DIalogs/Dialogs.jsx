import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div><NavLink to={"/dialogs/" + props.id} activeClassName ={s.active}>{props.name}</NavLink></div>
}
const Message = (props)=>{
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id='1' name='Антон' />
                <DialogItem id='2' name='Наташа' />
                <DialogItem id='3' name='Игорь' />
                <DialogItem id='4' name='Виктор' />
                <DialogItem id='5' name='Дмитрий' />
            </div>
            <div className={s.messages}>
                <Message message='hi'/>
                <Message message='How are you'/>
                <Message message='YO!'/>
                <Message message='YO!'/>
                <Message message='YO!'/>
            </div>
        </div>
    )
}

export default Dialogs;