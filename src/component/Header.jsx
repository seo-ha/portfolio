import React from 'react'

function Header() {

  return (
    <header>
      
      <button className='folderIcon'>
        <img src={process.env.PUBLIC_URL + `/assets/images/ico_shortcut.png`} alt="바로가기" loading='lazy'/>
      </button>
      
    </header>
  )
}

export default Header