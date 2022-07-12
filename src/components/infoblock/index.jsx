import { UserContext } from "../../routing";
import { useState, createContext, useContext, useEffect } from "react";
import { ProgressContext } from "../playArea";

export const Infoblock = () => {
  const {currentCommands} = useContext(UserContext);
  const {n} = useContext(ProgressContext);
  // console.log(n);
  const [isMouseOver, setMouse] = useState(false);
  const [style, setStyle] = useState("default");
  useEffect(() => {

    fireAnim(n.bool);
  }, [n]);

  function fireAnim(bool){
      console.log(bool);
      setStyle("testStyle");
      setTimeout((
      )=>{ setStyle("default");}, 500);
  }

  function handleMouseover(boolean){
     if(boolean){
        setMouse(true);
     }
     else{
      setMouse(false);
     }
  }
  return (
    <div className= {`infoblock ${style}`} onMouseOver = {()=>{handleMouseover(true)}} onMouseOut = {()=>{handleMouseover(false)}}
    >
      <div style={{display: "flex"}}>
         <div className="description">   { currentCommands[n.name].description}</div>
         <div className={`hint ${style}`}>{isMouseOver ? currentCommands[n.name].keys[0] : "Hint" }</div>  
      </div>
   
     {/* {isMouseOver ? currentCommands[n.name].keys[0] : currentCommands[n.name].description}     */}
     
      <div className="progressBar">

      </div>
     
    </div>
  )
}

