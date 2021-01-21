import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'GET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 122},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'blabla', likesCount: 11},
        {id: 4, message: 'dada', likesCount: 11}],
    userProfile: null,
    userStatus: ''
}

const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPost: ''
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                userStatus: action.userStatus
            }
        }
        default:
            return state;
    }
}
export const addNewPost = (newPostText) => ({type: ADD_POST,newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus})


export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export default profile_reducer
