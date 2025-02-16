import React from 'react'
import style from '../styles/intro.module.scss'

export default function Intro() {
  return (
    <div className={style.introPage}>
        <div className={style.content}>
            <img className={style.intro} src={process.env.PUBLIC_URL + '/assets/images/intro.png'} alt="" />
            <img className={style.sunglasses} src={process.env.PUBLIC_URL + '/assets/images/sunglasses.png'} alt="" />
        </div>
    </div>
  )
}
