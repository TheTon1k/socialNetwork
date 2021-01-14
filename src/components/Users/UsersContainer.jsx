import React from 'redux'
import {connect} from "react-redux";
import {followAC, setUserAC, unfollowAC} from "../../redux/users_reducer";
import Users from "./Users";


let mapStateToProps=(state)=>{
    return{users:state.usersPage.users}
}

let mapDispatchToProps = (dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUserAC(users))
        }
    }
}

let UserContainer = connect(mapStateToProps,mapDispatchToProps)(Users)


export default UserContainer