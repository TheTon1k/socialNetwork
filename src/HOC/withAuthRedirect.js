import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect= (Component)=>{
    const RedirectedComponent=(props)=>{

            if (!props.isAuth) return <Redirect to='/login'/>
            return <Component {...props}/>
    }
    return connect(mapStateToProps)(RedirectedComponent)
}







/*let mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export const withAuthRedirect = (Component) => {
    const redirectedComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login'/>
        return <Component {...props}/>
    }
    let connectedRedirectComponent = connect(mapStateToProps)(redirectedComponent)
    return connectedRedirectComponent
}*/

