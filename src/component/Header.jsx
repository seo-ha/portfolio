import React, { useContext } from 'react'
import { tabContext } from '../App'

function Header() {

  const {menuArr,selectMenuhandler} = useContext(tabContext)

  return (
    <header>
      {menuArr.map((ele, idx) => {
        if(ele.name === 'GitHub') {
            return <a key={idx} className={`folderIcon ${ele.className}`} href='https://github.com/seo-ha' target='_blank' rel="noreferrer">
            <img src={`%PUBLIC_URL%/assets/images/ico_${ele.icon}.png`} alt="" />
          </a>
        }
        return <button key={idx} className={`folderIcon ${ele.className}`} onClick={()=> selectMenuhandler(idx)}>
          <img src={`%PUBLIC_URL%/assets/images/ico_${ele.icon}.png`} alt="" />
        </button>
      })}
    </header>
  )
}

export default Header