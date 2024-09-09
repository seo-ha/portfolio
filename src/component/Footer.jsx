import React, { useContext } from 'react'
import { tabContext } from '../App';

function Footer() {

  const {currentTab,menuArr,selectMenuhandler} = useContext(tabContext)
  
  const now = new Date();
  const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
  const offset = 9 * 60 * 60 * 1000;
  const curTimeInKorea = new Date(utcNow + offset);
  
  const year = curTimeInKorea.getFullYear();
  const month = curTimeInKorea.getMonth() + 1;
  const date = curTimeInKorea.getDate();
  const hour = curTimeInKorea.getHours();
  const min = curTimeInKorea.getMinutes();


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
            <span>{hour < 13 ? `오전 ${(hour)}` : `오후 ${(hour-12)<10?`${(hour-12)}`: (hour-12)}`}:{min < 10 ? `0${(min)}` : (min)}</span>
            <span>{year}-{month < 10 ?  `0${(month)}` : (month)}-{date < 10 ?  `0${(date)}` : (date)}</span>
          
          </div>
          
    </footer>
  )
}

export default Footer;