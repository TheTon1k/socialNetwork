import {newMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps =(state)=> {
    return{
        dialogsPage:state.dialogsPage,
        newMessageText:state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        newMessage: ()=>{
            dispatch(newMessageActionCreator())
        },
        changeMessageText: (text)=>{
            dispatch(updateMessageActionCreator(text))
        }
    }
}

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;