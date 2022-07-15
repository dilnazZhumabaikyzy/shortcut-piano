import { UserContext } from "../../routing";
import { useState, createContext, useContext, useEffect } from "react";
import { ProgressContext } from "../playArea";
import { user } from "../../modules/user";
//console\.log\(([^)]+)\);
export const Infoblock = (props) => {

  const mysong = props.mysong;
  
  
  const {currentCommands} = useContext(UserContext);
  const {n,userScore,setUserScore,isEnd} = useContext(ProgressContext);
  
  const [isMouseOver, setMouse] = useState(false);
  const [style, setStyle] = useState("");
  const [progressLine, setProgressLile] = useState(0);
  const [firstEnter, setFirstEnter] = useState(true);



  useEffect(() => {    
    // console.log(n);
    if(!firstEnter)
    fireAnim(n.bool);
  }, [n]);

  useEffect(()=>{
   setFirstEnter(false);
  },[]);
  useEffect(()=>{
    // console.log(userScore);
  },[userScore])
  
  function fireAnim(bool){
      if(isEnd) return;
      const style = bool ? "correct" : "false";
      setStyle(style);
      
      if(bool){     
        let percent =  progressLine + 90/mysong.noteOrder.length;
        setProgressLile(percent);
        console.log();
       if(!isMouseOver)
       {console.log("ui");
        setUserScore(userScore + 10);}
      }
      else{
        setProgressLile(0);
        if(userScore !== 0) setUserScore(userScore - 10); 
      }

      setTimeout((
      )=>{ setStyle("");}, 300);
  }

  function handleMouseover(boolean){
     if(boolean){
        setMouse(true);
     }
     else{
        setMouse(false);
     }
   };
  return (
    <div className= {`infoblock ${style}`} onMouseOver = {()=>{handleMouseover(true)}} onMouseOut = {()=>{handleMouseover(false)}}
    >
      <div className="infoblock0">
         <div className="description">   { currentCommands[n.name].description}</div>
         <div className={`hint`}>{isMouseOver ? currentCommands[n.name].keys[0] : "Hint" }</div>  
      </div>
        
      <div className="progressBar" style={{width: `${progressLine}%`}}>
      </div>
     
    </div>
  )
}

