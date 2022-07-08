import { Header } from "../../header";
import { Link } from "react-router-dom";
import videojpeg from "../../../assets/images/video.jpg";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Instruction = (props)=>{
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        // console.log(props);
      }, []);
    const [detailsIsActive,setStatus] = useState(false);
    const currentCommands = props.currentCommands;
  return (
    <>
    <div className={`details ${detailsIsActive ? "":"hide"}`} onClick={()=>setStatus(false)}>
            <div className="details-inner">
                      <h2> Отключить бесконечную и неважную цепочку (m)</h2>
            <p>
            Если вы каким-то образом попали в неинтересную вам цепочку писем, нажмите на m, чтобы начать игнорировать ее. Любые новые сообщения этой ветки будут автоматически архивироваться.
            </p>
            <img src={videojpeg} alt=""/> 
        </div>
   </div>
    <div className='container'>    
      
      
      <Header></Header>
      <div className="instruction-header" >
          <h1>Memorize these shortcuts</h1>
          <Link to = "/play"
           className='text-link'>
                     <button>
                    Go
                    </button>
          </Link>
      </div>
    
        <div className="intruction-cards" key = {uuidv4()}> 
            {
                currentCommands.map((el)=>(
                    <div className="card" onClick={()=>setStatus(true)}  key = {uuidv4()}>
                        <div className="description" key = {uuidv4()}> {el.description}
                        </div>
                        <div className="shortcuts-block" key = {uuidv4()}> {el.keys.map(el=>(
                            <><div className="keyStyle"  key = {uuidv4()}> 
                               {el}
                            </div>
                            </>
                        ))}
                        </div>                       
                    </div>
                ))
            }
        </div>
     </div>
      {/* <Footer></Footer> */}
  </>  
  )
}

