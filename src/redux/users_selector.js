export const getUsers = (state) => {
    return state.usersPage.users
}
export const currentPage = (state) => {
    return state.usersPage.currentPage
}
export const usersTotalCount = (state) => {
    return state.usersPage.usersTotalCount
}
export const pageSize = (state) => {
    return state.usersPage.pageSize
}
export const followingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const preloader = (state) => {
    return state.usersPage.preloader
}