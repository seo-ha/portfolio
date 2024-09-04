import React, { useState } from 'react'

function Home() {

  const [search, setSearch] = useState("");
  const list = [
    '정직한', 
    '늘 배우는', 
    '성실한', 
    '손이 빠른',
    '꼼꼼한',
    '책임감이 있는',
    '퍼블리셔',
  ];

  const filterTitle = list.filter((item) => {
    return item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
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
        {filterTitle.map((item,id)=><li key={id}>{item}</li>) }
      </ul>

    </div>
  )
}

export default Home