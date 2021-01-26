import React from 'react'
import {connect} from "react-redux";
import { follow, unfollow, requestUsers, toggleFollowingButton} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    currentPage,
    followingInProgress,
    getUsers,
    pageSize,
    preloader,
    usersTotalCount
} from "../../redux/users_selector";


class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage,pageSize}= this.props
        this.props.requestUsers(currentPage,pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.preloader && <Preloader/>}
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
        users: getUsers(state),
        currentPage: currentPage(state),
        usersTotalCount: usersTotalCount(state),
        pageSize: pageSize(state),
        followingInProgress: followingInProgress(state),
        preloader:preloader(state)
    }

}
export default compose(
    connect(mapStateToProps,{unfollow, follow, toggleFollowingButton, requestUsers}),
    withAuthRedirect)(UsersContainer)