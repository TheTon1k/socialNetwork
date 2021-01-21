import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: ''
}

const authRecuder = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error

            }
        }
        default:
            return state
    }
}

export const setNewUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const setError = (error='') => ({type: SET_ERROR,error})


export const getAuthUserData = () => (dispatch) => {

    authAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setNewUserData(id, email, login, true))
            }
        })

}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else if (response.data.resultCode !== 0) {

                dispatch(setError(response.data.messages[0]))
            }
        })
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setNewUserData(null, null, null, false))
                dispatch(setError())
            }
        })
}

export default authRecuder