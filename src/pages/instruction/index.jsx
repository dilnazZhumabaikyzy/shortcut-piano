import  Header  from "../../components/header";
import { Link, useParams } from "react-router-dom";
import videojpeg from "../../assets/images/video.jpg";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Instruction = (props)=>{
    const {category, app} = useParams();
    const {param} = useParams();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        sessionStorage.setItem('currentSongScore',{});
        console.log(sessionStorage.getItem('currentSongScore'));
      }, []);
    
    const [detailsIsActive,setStatus] = useState(false);
    const [currentInstruction, setCurrentInstruction] = useState("");

    const shortcutsList = props.shortcutsList;
    const basicGmail = props.basicGmail;

    const currentCompositionIndex = basicGmail.findIndex(item => (item.id === param));
    const currentComposition = basicGmail[currentCompositionIndex];

    const currentCommands = shortcutsList.slice(currentComposition.section[0], currentComposition.section[1]);

     
   

   function handleInstruction(el){
    setStatus(true);
    setCurrentInstruction(el.instruction);
    
   }
  return (
    <>
    <div className={`details ${detailsIsActive ? "":"hide"}`}>
        <div className= "details-overlay" onClick={()=>{ setStatus(false)}}>     
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
          <Link to = {`/play/${category}/${app}/${currentCompositionIndex}`}
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

