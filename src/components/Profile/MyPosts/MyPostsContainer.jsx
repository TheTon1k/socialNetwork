import {addNewPost} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps =(state)=>{
    return{
        posts: state.profilePage.posts,
    }
}

export default connect(mapStateToProps, {addNewPost})(MyPosts);