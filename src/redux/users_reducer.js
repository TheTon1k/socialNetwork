const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_NEW_CURRENT_PAGE = 'SET_NEW_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'


let initialState = {
    users: [],
    currentPage: 1,
    usersTotalCount: 0,
    pageSize: 5
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        console.log('asd')
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_NEW_CURRENT_PAGE:
            return {
                ...state, currentPage: action.newPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, usersTotalCount: action.usersTotalCount
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (users) => ({type: SET_USERS, users})
export const setNewCurrentPageAC = (newPage) => ({type: SET_NEW_CURRENT_PAGE, newPage})
export const setUsersTotalCountAC = (usersTotalCount) => ({type: SET_USERS_TOTAL_COUNT, usersTotalCount})

export default usersReducer