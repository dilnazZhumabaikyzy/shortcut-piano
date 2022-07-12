import { Header } from "../../header";
import { Link } from "react-router-dom";
import videojpeg from "../../../assets/images/video.jpg";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Instruction = (props)=>{
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        console.log(props);
      }, []);
    const [detailsIsActive,setStatus] = useState(false);
    const [currentInstruction,setCurrentInstruction] = useState("");
    const currentCommands = props.currentCommands;
   

   function handleInstruction(el){
    setStatus(true);
    setCurrentInstruction(el.instruction);
    console.log(currentInstruction);
   }
  return (
    <>
    <div className={`details ${detailsIsActive ? "":"hide"}`}>
        <div className= "details-overlay" onClick={()=>{console.log("you clecked me"); setStatus(false)}}>     
        </div>
        <div className= "details-inner">
            <div className="scroll-content">
                    <h2> {currentInstruction.h2}</h2>
                    <p>
                         {currentInstruction.description}
                          </p>
                    <img src={videojpeg} alt=""/> 
            </div>
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
    
        <div className="intruction-cards"> 
            {
                currentCommands.map((el)=>(
                    <div className="card" onClick={()=>handleInstruction(el)}  key = {uuidv4()}>
                        <div className="description" > {el.description}
                        </div>
                        <div className="shortcuts-block"> {el.keys.map(el=>(
                            <div className="keyStyle"  key = {uuidv4()}> 
                               {el}
                            </div>
                        ))}
                        </div>                       
                    </div>
                ))
            }
        </div>
     </div>
  </>  
  )
}

