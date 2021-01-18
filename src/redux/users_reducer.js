const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_NEW_CURRENT_PAGE = 'SET_NEW_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_PRELOADER = 'SET_PRELOADER'
const TOGGLE_FOLLOWING_BUTTON = 'TOGGLE_FOLLOWING_BUTTON'


let initialState = {
    users: [],
    currentPage: 1,
    usersTotalCount: 0,
    pageSize: 5,
    preloader: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
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
        case SET_PRELOADER:
            return {
                ...state, preloader: action.isLoad
            }
        case  TOGGLE_FOLLOWING_BUTTON: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
        }
        }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (newPage) => ({type: SET_NEW_CURRENT_PAGE, newPage})
export const setUsersTotalCount = (usersTotalCount) => ({type: SET_USERS_TOTAL_COUNT, usersTotalCount})
export const setPreloader = (isLoad) => ({type: SET_PRELOADER, isLoad})
export const toggleFollowingButton = (isFetching,userId) => ({type: TOGGLE_FOLLOWING_BUTTON, isFetching,userId})

export default usersReducer