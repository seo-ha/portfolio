import React, { useState } from 'react'

function Home() {

  const [search, setSearch] = useState("");
  const list = [
   { text : '자기소개서' , url : 'https://seohaha.notion.site/4bd92c213c3b424d8e7b12b2bbdcd8f4'}, 
   { text : 'Github' , url : 'https://github.com/seo-ha'}, 
   { text : 'Blog', url : 'https://blog.naver.com/myosotis99'}, 
   { text : '정직한'}, 
   { text : '늘 배우는'}, 
   { text : '성실한'}, 
   { text : '손이 빠른'},
   { text : '꼼꼼한'},
   { text : '책임감이 있는'},
  ];

  const filterTitle = list.filter((item) => {
    return item.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })

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
              ? <a href={item.url} target='_blank' rel='noreferrer'>{item.text}</a>
              : <span>{item.text}</span>
            }
            </li>) 
          
        }
      </ul>
      
      <p className='caption'>헤더의 빈곳을 잡고 드래그를 해보세요!</p>

    </div>
  )
}

export default Home