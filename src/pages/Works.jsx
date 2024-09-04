import React, { createContext, useState } from 'react'
import work from "../json/work.json"
import WorkItem from '../component/WorkItem'

export const openPopup = createContext();

function Works() {
  
  const [popupBool, setPopupBool] = useState(false);
  
  const undefindUrl = () => {
  
    if(popupBool){
      setPopupBool(false);
      document.querySelector('.popup').classList.remove('on')
      
    } else {
      setPopupBool(true);
      document.querySelector('.popup').classList.add('on');
        
    }
  }
  
  return (
    <div className='tabContent works'>
      
      <openPopup.Provider value={{popupBool, undefindUrl}}>
        <ul>
          
          {work
          .sort((a,b)=> a.id.padStart(2,"0") < b.id.padStart(2,"0") ? 1 : -1)
          .map(item => 
            <WorkItem key={item.id} idx={item.id} title={item.title} smallTit={item.smallTit} infoTit={item.infoTit} url={item.url} urlBool={item.urlBool} ></WorkItem>
          )}
        </ul>
        
        <div className='popup'>
          <div className="bg"></div>
          <div className="inner">
            <div className="top">
              <button onClick={()=>undefindUrl()}></button>
            </div>
            <p><span>※</span> URL이 원활하지 않습니다.<br/> 죄송합니다.🙏</p>
          </div>
        </div>
     
        </openPopup.Provider>
    </div>
  )
}

export default Works