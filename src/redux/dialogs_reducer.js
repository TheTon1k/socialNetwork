const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }

}
export const newMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (message) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, message: message})

export default dialogsReducer