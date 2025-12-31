import React, { useState } from 'react'
import skill from '../json/skill.json'

function Skill() {
  
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
    <div className='tabContent skill'>
      <div className='contentWrap'>
        
        <section className='sec1'>
          <h1><img src={process.env.PUBLIC_URL + '/assets/images/ico_human.png'} alt="사람아이콘" loading='lazy'/><br/>이런 것을 할 줄 알아요!</h1>
          
          <ul className='tags'>
            <li className='tag color6'>jquery</li>
            <li className='tag color4'>javascript</li>
            <li className='tag color1'>react</li>
            <li className='tag color5'>scss</li>
            <li className='tag color2'>gsap</li>
            <li className='tag color4'>aos</li>
            <li className='tag color6'>Photoshop</li>
            <li className='tag color3'>Figma</li>
            <li className='tag color1'>GitHub</li>
            <li className='tag color2'>Gitlab</li>
          </ul>
          
          <div className='inBox'>
            <p>이런 환경에서 작업 해 봤어요!</p>
            <ul className='tags'>
              <li className='tag color5'>cafe24</li>
              <li className='tag color2'>react</li>
              <li className='tag color3'>php</li>
              <li className='tag color4'>flutter</li>
              <li className='tag color1'>gulp</li>
            </ul>
          </div>
        </section>

        {
          skill.map((item, idx)=> {
           return <section className='sec2' key={idx}>
              <table>
                <colgroup>
                  <col width='30%'/>
                  <col width='70%'/>
                </colgroup>
                  <thead>
                    <tr>
                      <th>{item.company}</th>
                      <td>{item.date}</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      item.works.map((work, idx)=>{
                        return  <tr key={idx} >
                                  <td colSpan={2}>
                                    <a href={work.url ? work.url : undefined} target={work.url ? "_blank" : '_self'} rel='noopener noreferrer'  onClick={  work.url ? ()=> false : () => undefindUrl() }>
                                      <p className='siteName'>{work.name}<small> | 퍼블리싱 {work.publishing}</small></p>
                                      {
                                        work.infos.map((info, i)=>{
                                          return <span className='siteInfo' key={i}>- {info}.</span>
                                        })
                                      }
                                      
                                      <div className='tags'>
                                      
                                        {
                                      
                                          work.tags !== undefined
                                      
                                          ? work.tags.length > 0
                                            ? work.tags.map((tag, i)=>{
                                              return <span className={`tag color${tag.num}`} key={i}>{tag.txt}</span>
                                            })
                                            : ''
                                          : ''
                                        }
                                      
                                      </div>
                                    </a>
                                  </td>
                                </tr>
                      })
                    }
                  </tbody>
              </table>
              
            </section>
          })
        }
        
        <div className='popup'>
          <div className="bg"></div>
          <div className="inner">
            <div className="top">
              <button onClick={()=>undefindUrl()}></button>
            </div>
            <p><span>※</span> URL이 원활하지 않습니다.<br/> 죄송합니다.🙏</p>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Skill