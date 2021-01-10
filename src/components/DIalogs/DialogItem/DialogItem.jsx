import React from 'react'
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
                <img src={props.avatarSrc} className={s.avaImg} alt=""/> {props.name}
            </NavLink>
        </div>)
}

export default DialogItem;