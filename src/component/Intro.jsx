import React from 'react'

export default function Intro() {
  return (
    <div className='introPage'>
        <div className='introContent'>
            <img className='intro' src={process.env.PUBLIC_URL + '/assets/images/intro.png'} alt="" />
            <img className='sunglasses' src={process.env.PUBLIC_URL + '/assets/images/sunglasses.png'} alt="" />
        </div>
    </div>
  )
}
