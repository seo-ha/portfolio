import React, { useContext, useEffect, useRef, useState } from 'react'
import { tabContext } from '../App';

function Main() {

  const [toggle, setToggle] = useState(false);
  const {currentTab, menuArr, selectMenuhandler} = useContext(tabContext);
  const [isDragMove, setIsDragMove] = useState(false);
  const [ windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  const [ position, setPosition] = useState({
    x: undefined,
    y: undefined,
  })
  
  useEffect(()=>{
    //메인 반응형 사이즈
    if (typeof window !== 'undefined') {
      
      const handleResize = () => {
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
   
        if(windowWidth < 900) {
           
            setWindowSize({
              width: windowWidth / 1,
              height: windowHeight / 1.08
            })
            
            setPosition({
              x: Math.ceil((windowWidth - (windowWidth / 1.05)) / 2),
              y: Math.ceil((windowHeight - (windowHeight / 1.02)) / 2)
            })
            
        } else if (windowWidth < 1950 && windowHeight < 950) {
            setWindowSize({
              width: windowWidth / 1.4,
              height: windowHeight / 1.08
            })
            
            setPosition({
              x: Math.ceil((windowWidth - (windowWidth / 1.4)) / 2),
              y: Math.ceil((windowHeight - (windowHeight / 1.09)) / 2)
            })
        } else {
            
            setWindowSize({
              width: windowWidth / 1.4,
              height: windowHeight / 1.3
            })
            
            setPosition({
              x: Math.ceil((windowWidth - (windowWidth / 1.4)) / 2),
              y: Math.ceil((windowHeight - (windowHeight / 1.2)) / 2)
            })
        }
      }
        
      window.addEventListener('resize',handleResize);
      
      handleResize()
      
      return () => window.removeEventListener("resize", handleResize);
      
    } else {
      
      return () => window.removeEventListener("resize", () => {
          return null
      });
      
    }
   
  },[])
  
  //메인 그래그&드랍
  function MouseDrag(e) {

    const mouseMoveHandler = (event) =>{
      setIsDragMove(true)
      const deltaX = event.screenX - e.screenX;
      const deltaY = event.screenY - e.screenY;
      setPosition({
        x :position.x + deltaX,
        y :position.y + deltaY
      });
      
      
    };
    
    const mouseUpHandler = () =>{
      setIsDragMove(false)
      document.removeEventListener('mousemove',mouseMoveHandler);

    };

    document.addEventListener('mousemove',mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler,{once:true})
 

  }

  function Toggle() {
    setToggle(!toggle);
  }

  //메인 상단 탭 드래그 스크롤
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if(isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
  


  return (
    <main id="boundery">
      <section className={ !toggle ? 'main' : 'main on' } style={{transform: `translateX(${position.x}px) translateY(${position.y}px)`,width: windowSize.width, height:windowSize.height}} >
      
        <div className='nav'> 
        
          <div className='tabList' onMouseDown={onDragStart}  onMouseMove={onDragMove} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
                
            {menuArr.map((ele, idx) => {
              if(ele.name === 'GitHub') {
                  return <a key={idx} className={currentTab === idx ? 'mainTab tabBtn on' : 'mainTab tabBtn'} href='https://github.com/seo-ha' target='_blank' rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + `/assets/images/ico_${ele.icon}.png`} alt=""  loading='lazy'/>
                  {ele.name}
                  <span className='closeBtn'><i></i></span>
                </a>
              }
              return <button key={idx} className={currentTab === idx ? `mainTab tabBtn on` : `mainTab tabBtn`} onClick={()=> selectMenuhandler(idx)}>
                <img src={process.env.PUBLIC_URL + `/assets/images/ico_${ele.icon}.png`} alt=""  loading='lazy'/>
                {ele.name}
                <span className='closeBtn'><i></i></span>
              </button>
            })}
            
          </div>
          
          <div className={ isDragMove ? `icons on` : `icons`} onMouseDown={(e) => MouseDrag(e)} >
            <button className='nonclick'><img src={process.env.PUBLIC_URL + "/assets/images/ico_hide.png?ver=0905"} alt=""  loading='lazy'/></button>
            <button onClick={Toggle}><img src={ !toggle ? process.env.PUBLIC_URL + "/assets/images/ico_upSize.png?ver=0905" :  process.env.PUBLIC_URL +  "/assets/images/ico_downSize.png?ver=0905"} alt=""  loading='lazy'/></button>
            <button className='nonclick'><img src={process.env.PUBLIC_URL + "/assets/images/ico_close.png?ver=0905"} alt=""  loading='lazy'/></button>
          </div>
          
        </div>
        
        {menuArr[currentTab].content}
        
      </section>
    </main>
  )
}

export default Main