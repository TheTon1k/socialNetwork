import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setNewUserData} from "../../redux/auth_reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials:true})
            .then(response => {
                debugger
                if(response.data.resultCode===0){
                    this.props.setNewUserData(response.data.data)
                }

            })
    }

    render() {
        return <Header {...this.props}/>

    }
}

let mapStateToProps = (state) => {
    return ({
        login: state.auth.login,
        isAuth: state.auth.isAuth
    })
}
export default connect(mapStateToProps, {setNewUserData})(HeaderContainer);