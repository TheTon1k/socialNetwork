import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'GET_USER_STATUS';
const DELETE_POST='DELETE_POST'

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
        case  DELETE_POST:{
            return {
                ...state,
                posts:state.posts.filter(p=>p.id !==action.postId )
            }
        }
        default:
            return state;
    }
}
export const addNewPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus})
export const deletePost = (postId) =>({type:DELETE_POST,postId})


export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))

}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }

}

export default profile_reducer
