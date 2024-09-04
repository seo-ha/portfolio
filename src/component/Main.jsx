import React, { useContext, useEffect, useRef, useState } from 'react'
import { tabContext } from '../App';

function Main() {

  const [toggle, setToggle] = useState(false);
  const {currentTab, menuArr, selectMenuhandler} = useContext(tabContext);
  
  const [ windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  const [ position, setPosition] = useState({
    x: undefined,
    y: undefined,
  })
  
  useEffect(()=>{
    
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
  
  const [isDragMove, setIsDragMove] = useState(false);
  
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
    if (isDrag) {
       scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
  


  return (
    <div id="boundery">
      <div className={ !toggle ? 'main' : 'main on' } style={{transform: `translateX(${position.x}px) translateY(${position.y}px)`,width: windowSize.width, height:windowSize.height}} >
      
        <div className='nav'> 
        
          <div className='tabList' onMouseDown={onDragStart}  onMouseMove={onDragMove} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
                
            {menuArr.map((ele, idx) => {
              if(ele.name === 'GitHub') {
                  return <a key={idx} className={currentTab === idx ? 'mainTab tabBtn on' : 'mainTab tabBtn'} href='https://github.com/seo-ha' target='_blank' rel="noreferrer">
                  <img src={`/assets/images/ico_${ele.icon}.png`} alt="" />
                  {ele.name}
                  <span className='closeBtn'><i></i></span>
                </a>
              }
              return <button key={idx} className={currentTab === idx ? `mainTab tabBtn on` : `mainTab tabBtn`} onClick={()=> selectMenuhandler(idx)}>
                <img src={`/assets/images/ico_${ele.icon}.png`} alt="" />
                {ele.name}
                <span className='closeBtn'><i></i></span>
              </button>
            })}
            
          </div>
          
          <div className={ isDragMove ? `icons on` : `icons`} onMouseDown={(e) => MouseDrag(e)} >
            <button className='nonclick'><img src="/assets/images/ico_hide.png" alt="" /></button>
            <button onClick={Toggle}><img src={ !toggle ? "/assets/images/ico_upSize.png" :  "/assets/images/ico_downSize.png"} alt="" /></button>
            <button className='nonclick'><img src="/assets/images/ico_close.png" alt="" /></button>
          </div>
          
        </div>
        
        {menuArr[currentTab].content}
        
      </div>
    </div>
  )
}

export default Main