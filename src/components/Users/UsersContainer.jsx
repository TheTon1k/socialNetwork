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
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true)
        userAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.setPreloader(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.setPreloader(false)
                this.props.setUsers(data.items)
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
                   userAPI={userAPI}
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