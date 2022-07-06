import { useState } from "react";
import { Header } from "../../header"
import logo from '../../../assets/images/disk.png';
import { Link } from "react-router-dom";
export const Compositions = () => {
  const [transition, setTransition] = useState("");
  
    return (
    <>
    <div className="container">
     <Header>        
     </Header>
    
      <div className="composition-list">
       <div className="composition">
        <div className={`background ${transition}`} onMouseOver={()=> setTransition("transition-line")} onMouseOut = {()=>setTransition("")} >
             <div className="line"></div>
             <div className="line"></div>
             <div className="line"></div>
        </div>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="text">
        <div className="title">Happy Birthday</div>
        <div className="description">8 basic commands to learn</div>
        <div className="progress">
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        </div>  
        </div>
        <div className="playButton">
        <Link to="/instruction" className='text-link'>
            <button>Play</button>
        </Link>
        </div>
       </div>

       <div className="composition">
        <div className={`background ${transition}`} onMouseOver={()=> setTransition("transition-line")} onMouseOut = {()=>setTransition("")} >
             <div className="line"></div>
             <div className="line"></div>
             <div className="line"></div>
        </div>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="text">
        <div className="title">Jingle Bells</div>
        <div className="description">5 basic commands to learn</div>
        <div className="progress">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className = "fa-regular fa-star"></i>
        </div>  
        </div>
        <div className="playButton">
            <button>Play</button>
        </div>
       </div>
       <div className="composition">
        <div className={`background ${transition}`} onMouseOver={()=> setTransition("transition-line")} onMouseOut = {()=>setTransition("")} >
             <div className="line"></div>
             <div className="line"></div>
             <div className="line"></div>
        </div>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="text">
        <div className="title">Happy Birthday</div>
        <div className="description">8 basic commands to learn</div>
        <div className="progress">
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        </div>  
        </div>
        <div className="playButton">
        <Link to="/instruction" className='text-link'>
            <button>Play</button>
        </Link>
            
        </div>
       </div>
      </div>
    </div>
    </>
  )
}
