import React from 'react'
import {connect} from "react-redux";
import {
    follow, unfollow, getUsers,
    setCurrentPage, toggleFollowingButton,
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {
        return <>
            {this.props.preloader ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   usersTotalCount={this.props.usersTotalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        usersTotalCount: state.usersPage.usersTotalCount,
        pageSize: state.usersPage.pageSize,
        followingInProgress: state.usersPage.followingInProgress
    }

}

/*let mapDispatchToProps = (dispatch) => {
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
        },
        togglePreloader: (status)=>{
            dispatch(setPreloaderAC(status))
        }

    }
}*/

let UserContainer = connect(mapStateToProps, {
    unfollow, follow, setCurrentPage,
    toggleFollowingButton, getUsers
})(UsersContainer)


export default UserContainer