import React, { useState } from 'react'

function Home() {

  const [search, setSearch] = useState("");
  const list = [
   { text : '이력서' , url : process.env.PUBLIC_URL + '/assets/images/김서하_이력서.pdf'}, 
   { text : '경력기술서' , url : process.env.PUBLIC_URL + '/assets/images/김서하_경력기술서.docx'}, 
   { text : 'Github' , url : 'https://github.com/seo-ha'}, 
   { text : '#퍼블리셔'}, 
   { text : '#정직한'},   
   { text : '#늘 배우는'},
   { text : '#성실한'}, 
   { text : '#손이 빠른'},
   { text : '#꼼꼼한'},
   { text : '#책임감이 있는'}, 
  ];

  const filterTitle = list.filter((item) => { return item.text.includes(search) })

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='tabContent home'>

      <h1>
        <span className='s'>S</span>
        <span className='e'>E</span>
        <span className='o'>O</span>
        <span className='h'>H</span>
        <span className='a'>A</span>
      </h1>

      <div className="searchBox">
        <input type="search" name="" id="searchInput" value={search} onChange={onChange} placeholder='키워드를 검색해 보세요.'/>
        <button></button>
      </div>

      <ul className='infoBox'>
        {filterTitle.map((item,id)=>
        
          <li key={id}>
            {
              item.url 
              ? <a href={item.url} download={item.text === '이력서' || item.text === '경력기술서' ? item.text : false } target='_blank' rel='noreferrer'>{item.text}</a>
              : <span>{item.text}</span>
            }
            </li>) 
          
        }
      </ul>
      
      <p className='caption'>붉은 탭 바의 빈 곳을 잡고 움직여보세요!</p>

    </div>
  )
}

export default Home