import {newPostActionCreator, updatePostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps =(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps =(dispatch) =>{
    return{
        addPost:()=>{
            dispatch(newPostActionCreator())
        },
        postChange:(message)=>{
            dispatch(updatePostActionCreator(message))
        }
    }
}

let MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostContainer;