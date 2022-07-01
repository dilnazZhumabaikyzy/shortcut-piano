import { UserContext } from "../..";
import { useState, createContext, useContext, useEffect } from "react";
import { ProgressContext } from "../playArea";

export const Infoblock = () => {
  const currentCommands = useContext(UserContext);
  const {n} = useContext(ProgressContext);
  // console.log(n);
  const [style, setStyle] = useState("default");
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    console.log("useEffect fired");
    fireAnim();
  }, [n]);

  function fireAnim(){
      setStyle("testStyle");
      setTimeout((
      )=>{ setStyle("default");}, 500);
  }
  
  return (
    <div className= {`infoblock ${style}`}
    >
     {currentCommands[n.indexOrder].description}    
    </div>
  )
}

