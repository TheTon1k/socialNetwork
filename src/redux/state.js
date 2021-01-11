import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sideBarReducer from "./sidebar_reducer";


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
        sideBar: [
            {id: 1, name: 'Антон'},
            {id: 2, name: 'Наташа'},
            {id: 3, name: 'Игорь'}]

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
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.sideBar = sideBarReducer(this._state.sideBar,action)
        this._callSubscriber(this._state)

    }
}
