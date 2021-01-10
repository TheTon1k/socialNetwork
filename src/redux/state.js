let renderEntiredTree = () => {
    console.log('state changed')
}
let state = {
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
}

export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntiredTree(state)

}

export const addMessage = (message) => {
    let newMessage = {
        id: 6,
        message: message
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText =''
    renderEntiredTree(state)
}
window.state = state.dialogsPage

export const updateNewMessageText = (val) => {
    state.dialogsPage.newMessageText = val;
    renderEntiredTree(state)
}

export const updateNewPostText = (val) => {
    state.profilePage.newPostText = val;
    renderEntiredTree(state)
}

export let subscribe = (observer) => {
    renderEntiredTree = observer
}

export default state