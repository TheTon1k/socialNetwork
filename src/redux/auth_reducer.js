import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authRecuder = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state, ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setNewUserData = ({id, email, login}) => ({type: SET_USER_DATA, data: {id, email, login}})


export const getAuthUserData = () => (dispatch) => {
    authAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setNewUserData(response.data.data))
            }
        })

}

export default authRecuder