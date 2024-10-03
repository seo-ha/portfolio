import React, { useContext, useEffect, useState } from 'react'
import { tabContext } from '../App';

function Footer() {

  const {currentTab,menuArr,selectMenuhandler} = useContext(tabContext)
  const offset = 9 * 60 * 60 * 1000;
  
  const nowTime = () =>{
    
    const now = new Date();
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const curTimeInKorea = new Date(utcNow + offset);
    
    let hour = curTimeInKorea.getHours();
    let min = curTimeInKorea.getMinutes();
    
    return `${hour < 13 ? `오전 ${(hour)}` : `오후 ${(hour-12)<10?`${(hour-12)}`: (hour-12)}`}:${min < 10 ? `0${(min)}` : (min)}`
  }
  
  const nowDate = () =>{
    
    const now = new Date();
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const curTimeInKorea = new Date(utcNow + offset);
    
    let year = curTimeInKorea.getFullYear();
    let month = curTimeInKorea.getMonth() + 1;
    let date = curTimeInKorea.getDate();
    
    return `${year}-${month < 10 ?  `0${(month)}` : (month)}-${date < 10 ?  `0${(date)}` : (date)}`
  }
  
  const [clock , setClock] = useState(nowTime);
  const [calender , setCalender] = useState(nowTime);
  
  setInterval(()=> {
    setClock(nowTime);
    setCalender(nowDate);
  }, 1000);
  
  return (
    <footer>
      
          <button className='window'>
            <img src={process.env.PUBLIC_URL + '/assets/images/ico_window.png'} alt="" />
          </button>
      
          <div className='tabs'>
       
            {menuArr.map((ele, idx) => {
              if(ele.name === 'GitHub') {
                  return <a key={idx} className={currentTab === idx ? 'folderIcon tabBtn on' : 'folderIcon tabBtn'} href='https://github.com/seo-ha' target='_blank' rel="noreferrer">
                  <img src={process.env.PUBLIC_URL +`/assets/images/ico_${ele.icon}.png`} alt=""  loading='lazy'/>
                </a>
              }
              return <button key={idx} className={currentTab === idx ? 'folderIcon tabBtn on' : 'folderIcon tabBtn'} onClick={()=> selectMenuhandler(idx)}>
                <img src={process.env.PUBLIC_URL +`/assets/images/ico_${ele.icon}.png`} alt=""  loading='lazy'/>
              </button>
            })}
            
            
          </div>
          
          <div className='date'>
            <span>{clock}</span>
            <span>{calender}</span>
            
          </div>
          
    </footer>
  )
}

export default Footer;