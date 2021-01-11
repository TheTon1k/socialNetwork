const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const newMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (message) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, message: message})
export const newPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (message) =>
    ({type: UPDATE_NEW_POST_TEXT, message: message})

export let store = {
    _state: {
        dialogsPage: {
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
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 122},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'blabla', likesCount: 11},
                {id: 4, message: 'dada', likesCount: 11}],
            newPostText: ''
        },
        navbarPage: {
            friends: [
                {id: 1, name: 'Антон'},
                {id: 2, name: 'Наташа'},
                {id: 3, name: 'Игорь'}]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.message;
            this._callSubscriber(this._state)
        } else if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.message;
            this._callSubscriber(this._state)
        }
    }
}
