import React from 'react'
import style from '../../../utils/ErorsValidate.module.css'

const FormControl = ({meta:{touched,error}, children}) => {
    let touchedError = touched && error
    return (
        <div>
            <div className={touchedError && style.error}>
                {children}
            </div>
            {touchedError && <span className={style.errorMessage}>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}
