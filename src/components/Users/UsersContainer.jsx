import React from 'react'
import {connect} from "react-redux";
import {followAC, setNewCurrentPageAC, setUserAC, setUsersTotalCountAC, unfollowAC,} from "../../redux/users_reducer";
import * as axios from 'axios'
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return <Users onPageChanged={this.onPageChanged}
                      usersTotalCount={this.props.usersTotalCount}
                      pageSize={this.props.pageSize}
                      currentpage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}


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

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


export default UserContainer