import { useContext } from "react"
import { openPopup } from "../pages/Works"

function WorkItem({idx, title, smallTit, infoTit, url, urlBool}) {
  
  const {popupBool, undefindUrl} = useContext(openPopup)
  
  return (
    <li className={`item item${idx}`}>
        <a href={urlBool ? url : undefined} target={urlBool ? "_blank" : '_self'} rel="noopener noreferrer" onClick={  urlBool ? ()=> false : () => undefindUrl() }  >
            <div className="imgBox">
                <img src={`%PUBLIC_URL%/assets/images/work/img${idx}.jpg`} alt={title} />
            </div>
            <div className="hoverBox">
                <h2 className="tit">{title}</h2>
                <p className="ti">{smallTit}</p>
                <span className="info">참여도 {infoTit}</span>
            </div>
        </a>
    </li>
  )
}

export default WorkItem
