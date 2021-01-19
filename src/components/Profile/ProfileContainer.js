import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId=2
        this.props.getProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile ={this.props.profile}/>;
    }
}

let mapStateToProps =(state)=>{
    return{
        profile : state.profilePage.userProfile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,{getProfile})(WithUrlDataContainerComponent)