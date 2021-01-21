import React from 'react'
import {Field, Formik} from "formik";
import {validateLoginForm} from "../../utils/validators";

const LoginForm = (props) => {

    return <Formik
        initialValues={{login: '', password: '', rememberMe: false}}
        validateOnBlur
        onSubmit={values => {
            console.log(values)
        }}
        validationSchema={validateLoginForm}>
        {({errors, touched, handleSubmit, handleBlur, handleChange, isValid, dirty}) => (
            <form onSubmit={handleSubmit}>
                <div>Логин <Field onBlur={handleBlur} onChange={handleChange} name={'login'} type={'text'}/>
                    {touched.login && errors.login && <span>{errors.login}</span>}
                </div>
                <div>Пароль <Field onBlur={handleBlur} onChange={handleChange} name={'password'} type={'password'}/>
                    {touched.password && errors.password && <span>{errors.password}</span>}
                </div>
                <div>Запомнить меня <Field onChange={handleChange} name={'rememberMe'} type={'checkbox'}/></div>
                <button disabled={!isValid && !dirty} type={'submit'}>Войти</button>
            </form>)}
    </Formik>
}


const LoginPage = (props) => {

    return <div>
        <h1>LOGIN</h1>
        <LoginForm/>
    </div>
}

export default LoginPage