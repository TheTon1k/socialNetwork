import {getAuthUserData} from "./auth_reducer";

const INITIALIZED = 'INITIALIZED'


let initialState = {

    initialized: false
}

const initializeReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }

        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED,
})


export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserData()).then(() => dispatch(initializedSuccess()))

}


export default initializeReducer