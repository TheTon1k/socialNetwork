import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setPreloader,
    setUsers,
    setUsersTotalCount,
    unfollow,

} from "../../redux/users_reducer";
import * as axios from 'axios'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true
        })
            .then(response => {
                this.props.setPreloader(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials:true
            })
            .then(response => {
                this.props.setPreloader(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return <>
            {this.props.preloader ? <Preloader/>:null}
            <Users onPageChanged={this.onPageChanged}
                   usersTotalCount={this.props.usersTotalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}

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
        preloader: state.usersPage.preloader
    }

}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setNewCurrentPageAC(page))
//         },
//         setUsersTotalCount: (usersTotalCount) => {
//             dispatch(setUsersTotalCountAC(usersTotalCount))
//         },
//         togglePreloader: (status)=>{
//             dispatch(setPreloaderAC(status))
//         }
//
//     }
// }

let UserContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setPreloader
})(UsersContainer)


export default UserContainer