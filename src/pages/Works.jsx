import React, { createContext, useEffect, useState } from 'react'
import work from "../json/work.json"
import WorkItem from '../component/WorkItem'

export const openPopup = createContext();

function Works() {
  
  const [popupBool, setPopupBool] = useState(null);
  const [popupTitle, setPopupTitle] = useState(null);

  useEffect(() =>{
    
    if(popupTitle !== null){
      if(popupTitle === 'Boucheron') {
      
        setPopupBool(true);
        document.querySelector('.gifPopup').classList.add('on');
        
      } else if(popupTitle === 'gifPopupClose') {
        
        setPopupBool(false);
        document.querySelector('.gifPopup').classList.remove('on');
        
      } else {
        
        if(popupBool){
          setPopupBool(false);
          document.querySelector('.popup').classList.remove('on')
          
        } else {
          setPopupBool(true);
          document.querySelector('.popup').classList.add('on');
            
        }
        
      }
    }

  },[ popupTitle])
 
  const undefindUrl = (e) => {
    
    if (e.tagName === 'A') {
      setPopupTitle(e.childNodes[1].childNodes[0].innerText)
    }
    if (e.tagName === 'BUTTON') {
      setPopupTitle(e.getAttribute('class'));
    }
  }
  
  return (
    <div className='tabContent works'>
      
      <openPopup.Provider value={{undefindUrl}}>
        <ul>
          
          {work
          .sort((a,b)=> a.id.padStart(2,"0") < b.id.padStart(2,"0") ? 1 : -1)
          .map(item => 
            <WorkItem key={item.id} idx={item.id} title={item.title} smallTit={item.smallTit} infoTit={item.infoTit} url={item.url} urlBool={item.urlBool} ></WorkItem>
          )}
        </ul>
        
        <div className='popup'>
          <div className="inner">
            <div className="top">
              <button className='popupClose' onClick={(e)=>undefindUrl(e.currentTarget)}></button>
            </div>
            <p><span>※</span> URL이 원활하지 않습니다.</p>
          </div>
        </div>
        
        <div className='gifPopup'>
          <div className="inner">
            <div className="top">
              <button className='gifPopupClose' onClick={(e)=>undefindUrl(e.currentTarget)}></button>
            </div>
            <div className="middle">
              
              <div className="link"> 
                <p>* URL이 원활하지 않습니다.</p>
                {/* <a href="https://www.boucheron-event.co.kr/?utm=official-main" target='_blank' rel="noopener noreferrer">https://www.boucheron-event.co.kr/?utm=official-main</a> */}
              </div>
              
              <div className="imgBox">
                <img src={process.env.PUBLIC_URL + `/assets/images/work/img_21-1.gif?ver=1220`} alt="" />
                
                <p>Boucheron 겨울 이벤트로 css 애니메이션, 바닐라 자바스크립트 만든 인터렉션 사이트.</p>
                <p>인트로의 트리 등장과 장식 선택 시 나오는 효과는 이미지를 settimeout으로 돌려 gif 같은 효과를 줌. </p>
              </div> 
              
              <div className="imgBox">
                <img src={process.env.PUBLIC_URL + `/assets/images/work/img_21-2.gif?ver=1220`} alt="" />
                
                <p>장식을 선택하면 class를 붙여 자리에 맞는 애니메이션을 적용.</p>
                <p>작은 장식들은 자리 교체가 가능하게 작업.</p>
              </div> 
              
              <div className="imgBox">
                <img src={process.env.PUBLIC_URL + `/assets/images/work/img_21-3.gif?ver=1220`} alt="" />
                
                <p>편지지가 나오고 들어감이 자연스럽게 애니메이션을 구성.</p>
              </div> 
              
            </div>
          </div>
        </div>
     
        </openPopup.Provider>
    </div>
  )
}

export default Works