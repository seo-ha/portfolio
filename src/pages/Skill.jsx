import React from 'react'
import skill from '../json/skill.json'
import project from '../json/project.json'

function Skill() {
  
  return (
    <div className='tabContent skill'>
      <div className='contentWrap'>
        
        <section className='sec1'>
          <h1><img src={process.env.PUBLIC_URL + '/assets/images/ico_human.png'} alt="사람아이콘" loading='lazy'/><br/>이런 것을 할 줄 알아요!</h1>
          
          <ul className='tags'>
            <li className='tag color6'>jquery</li>
            <li className='tag color4'>javascript</li>
            <li className='tag color1'>scss</li>
            <li className='tag color2'>gsap</li>
            <li className='tag color4'>aos</li>
            <li className='tag color6'>Photoshop</li>
            <li className='tag color3'>Figma</li>
            <li className='tag color1'>GitHub</li>
          </ul>
          
          <div className='inBox'>
            <p>이런 환경에서 작업 해 봤어요!</p>
            <ul className='tags'>
              <li className='tag color5'>cafe24</li>
              <li className='tag color2'>react</li>
              <li className='tag color3'>php</li>
              <li className='tag color4'>flutter</li>
            </ul>
          </div>
        </section>
        
        <section className='sec2'>
          <table>
            <colgroup>
              <col width='30%'/>
              <col width='70%'/>
            </colgroup>
              <thead>
                <tr>
                  <th>두부</th>
                  <td>2021.09 ~ </td>
                </tr>
              </thead>
              <tbody>
                {
                  skill.map((item, idx)=>{
                    return  <tr key={idx}>
                              <td colSpan={2}>
                                <p className='siteName'>{item.name}<small> | 퍼블리싱 {item.publishing}%</small></p>
                                {
                                  item.infos.map((info, i)=>{
                                    return <span className='siteInfo' key={i}>- {info}.</span>
                                  })
                                }
                                
                                <div className='tags'>
                                  
                                  {
                                    
                                    item.tags !== undefined
                                    
                                    ? item.tags.length > 0
                                      ? item.tags.map((tag, i)=>{
                                        return <span className={`tag color${tag.num}`} key={i}>{tag.txt}</span>
                                      })
                                      : ''
                                    : ''
                                  }
                                  
                                </div>
                              </td>
                            </tr>
                  })
                }
              </tbody>
          </table>
          
        </section>
        
        <section className='sec2'>
          <table>
            <colgroup>
              <col width='30%'/>
              <col width='70%'/>
            </colgroup>
              <thead>
                <tr>
                  <th className='mWidth'>개인 프로젝트</th>
                  <td> ~ ing</td>
                </tr>
              </thead>
              <tbody>
                {
                    project.map((item, idx)=>{
                      return  <tr key={idx}>
                                <td colSpan={2}>
                                  <p className='siteName'>{item.name}<small> | 퍼블리싱 {item.publishing}%</small></p>
                                  {
                                    item.infos.map((info, i)=>{
                                      return <span className='siteInfo' key={i}>- {info}.</span>
                                    })
                                  }
                                  
                                  <div className='tags'>
                                    
                                    {
                                      
                                      item.tags !== undefined
                                      
                                      ? item.tags.length > 0
                                        ? item.tags.map((tag, i)=>{
                                          return <span className={`tag color${tag.num}`} key={i}>{tag.txt}</span>
                                        })
                                        : ''
                                      : ''
                                    }
                                    
                                  </div>
                                </td>
                              </tr>
                    })
                  }
              </tbody>
          </table>
          
        </section>
        
        
      </div>
    </div>
  )
}

export default Skill