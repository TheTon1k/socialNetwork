const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 122},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'blabla', likesCount: 11},
        {id: 4, message: 'dada', likesCount: 11}],
    newPostText: '',
    userProfile: null
}

const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPost: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.message
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.profile
            }
        }
        default:
            return state;
    }
}
export const newPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (message) => ({type: UPDATE_NEW_POST_TEXT, message})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export default profile_reducer
