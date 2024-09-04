import React, { useState } from 'react'

function Home() {

  const [search, setSearch] = useState("");
  const list = ['안녕하세요', '날씨가 이게 뭐야', '아아아아아니', '집가고싶다'];

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
        <input type="search" name="" id="searchInput" value={search} onChange={onChange} placeholder='리스트를 검색해 보세요.'/>
        <button></button>
      </div>

      <ul className='infoBox'>
        {filterTitle.map((item,id)=><li key={id}>{item}</li>) }
      </ul>

    </div>
  )
}

export default Home