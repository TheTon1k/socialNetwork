import React from 'react'
import {newMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage
    let newMessageText = dialogsPage.newMessageText

    let newMessage = () => {
        props.store.dispatch(newMessageActionCreator())
    }
    let changeMessageText = (text) => {
        props.store.dispatch(updateMessageActionCreator(text))
    }
    return (
        <Dialogs newMessage = {newMessage} changeMessageText = {changeMessageText} newMessageText={newMessageText} dialogsPage={dialogsPage}/>
    )
}

export default DialogsContainer;