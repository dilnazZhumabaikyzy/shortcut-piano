import { UserContext } from "../../routing";
import { useState, createContext, useContext, useEffect } from "react";
import { ProgressContext } from "../playArea";

export const Infoblock = () => {
  const {currentCommands} = useContext(UserContext);
  const {n} = useContext(ProgressContext);
  // console.log(n);
  const [style, setStyle] = useState("default");
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    // console.log("useEffect fired");
    fireAnim();
  }, [n]);

  function fireAnim(){
      setStyle("testStyle");
      setTimeout((
      )=>{ setStyle("default");}, 500);
  }
  const [isMouseOver, setMouse] = useState(false);
  return (
    <div className= {`infoblock ${style}`} onMouseOver = {()=>setMouse(true)} onMouseOut = {()=>setMouse(false)}
    >
     {isMouseOver ? currentCommands[n.name].keys[0] : currentCommands[n.name].description}    
    </div>
  )
}

