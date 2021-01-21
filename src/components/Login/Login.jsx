import React from 'react'
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import style from '../../utils/ErorsValidate.module.css'

const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field name={'email'} placeholder={'email'} component={Input} validate={required}/>
        <Field name={'password'} placeholder={'password'} component={Input} type={'password'} validate={required}/>
        <Field name={'rememberMe'} component={Input} type={'checkbox'}/> remember me
        <div className={style.errorMessage} >
            {props.error}
        </div>
        <button>Log in</button>
    </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if (props.isAuth) return <Redirect to='/profile'/>
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm login={props.login} onSubmit={onSubmit}/>
    </div>
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error
    }
}


export default connect(mapStateToProps, {login})(LoginPage)