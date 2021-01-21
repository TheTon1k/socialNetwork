import React from 'react'
import style from '../../../utils/ErorsValidate.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    let touchedError = meta.touched && meta.error
    return (
        <div>
            <div className={touchedError && style.error}>
                {props.children}
            </div>
            {touchedError && <span className={style.errorMessage}>{meta.error}</span>}
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
