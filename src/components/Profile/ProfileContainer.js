import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.autorizedUserId
        if (!userId) this.props.history.push('/login')
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.userProfile,
        status: state.profilePage.userStatus,
        autorizedUserId: state.auth.userId
    }
}
export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
