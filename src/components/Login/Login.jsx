import React from 'react'
import {Field, Formik} from "formik";
import {validateLoginForm} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    return <Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        validateOnBlur
        onSubmit={values => {
            props.login(values.email,values.password,values.rememberMe)
        }}
        validationSchema={validateLoginForm}>
        {({errors, touched, handleSubmit, handleBlur, handleChange, isValid, dirty}) => (
            <form onSubmit={handleSubmit}>
                <div>Логин <Field onBlur={handleBlur} onChange={handleChange} name={'email'} type={'email'}/>
                    {touched.login && errors.login && <span>{errors.login}</span>}
                </div>
                <div>Пароль <Field onBlur={handleBlur} onChange={handleChange} name={'password'} type={'password'}/>
                    {touched.password && errors.password && <span>{errors.password}</span>}
                </div>
                <div>Запомнить меня <Field onChange={handleChange} name={'rememberMe'} type={'checkbox'}/></div>
                <div>{props.error}</div>
                <button disabled={!isValid && !dirty} type={'submit'}>Войти</button>
            </form>)}
    </Formik>
}
const LoginPage = (props) => {
    if(props.isAuth) return <Redirect to='/profile'/>
debugger
    return <div>
        <h1>LOGIN</h1>
        <LoginForm login={props.login} error={props.error}/>
    </div>
}
let mapStateToProps = (state)=>{
    return{
        isAuth:state.auth.isAuth,
        error:state.auth.error
    }
}


export default connect(mapStateToProps, {login})(LoginPage)