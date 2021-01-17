import React from 'react'
import preloader from '../../../assets/images/preloader.svg'

const Preloader = (props)=>{
    return <div><img src={props.preloader ? preloader:null} alt=""/></div>
}

export default Preloader