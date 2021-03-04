import React from 'react'
import preloader from './../../../assets/preloaders/Preloader_1.gif'
import s from './Preloading.module.css'

const Preloading = (props) => {
    return(
        <div>
            <img src={preloader} alt="" className={s.img}/>
        </div>
    )
}

export default Preloading;