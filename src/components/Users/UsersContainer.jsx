import React from 'redux'
import {connect} from "react-redux";
import {followAC, setNewCurrentPageAC, setUserAC, setUsersTotalCountAC, unfollowAC,} from "../../redux/users_reducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersTotalCount: state.usersPage.usersTotalCount,
        pageSize: state.usersPage.pageSize,
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setNewCurrentPageAC(page))
        },
        setUsersTotalCount: (usersTotalCount) => {
            dispatch(setUsersTotalCountAC(usersTotalCount))
        }

    }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UserContainer