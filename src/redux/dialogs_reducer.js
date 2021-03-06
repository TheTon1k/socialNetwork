const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Антон', avatarSrc: 'https://www.blexar.com/avatar.png'},
        {id: 2, name: 'Наташа', avatarSrc: 'https://html5css.ru/howto/img_avatar2.png'},
        {id: 3, name: 'Игорь', avatarSrc: 'https://www.blexar.com/avatar.png'},
        {id: 4, name: 'Виктор', avatarSrc: 'https://www.blexar.com/avatar.png'},
        {id: 5, name: 'Дмитрий', avatarSrc: 'https://www.blexar.com/avatar.png'},
        {
            id: 6,
            name: 'Котик',
            avatarSrc: 'https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg'
        },],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YOOOOO!O!!OO!O!O!!!'},],
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.message}],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.message
            }
        }
        default:
            return state;
    }

}
export const addNewMessage = (message) => ({type: ADD_MESSAGE,message: message})

export default dialogsReducer