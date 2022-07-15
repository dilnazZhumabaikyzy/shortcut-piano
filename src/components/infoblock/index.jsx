import { UserContext } from "../../routing";
import { useState, createContext, useContext, useEffect } from "react";
import { ProgressContext } from "../playArea";
import { user } from "../../modules/user";
//console\.log\(([^)]+)\);
export const Infoblock = (props) => {

  const mysong = props.mysong;
  
  
  const {currentCommands} = useContext(UserContext);
  const {n,userScore,setUserScore,isEnd,isMouseOver, setMouse} = useContext(ProgressContext);
  

  const [style, setStyle] = useState("");
  const [progressLine, setProgressLile] = useState(0);
  const [firstEnter, setFirstEnter] = useState(true);


  useEffect(()=>{
    console.log("REFRESH");
    console.log(progressLine);
  },[]);


  useEffect(() => {    
    // console.log(n);
    if(!firstEnter)
    fireAnim(n.bool);
  }, [n]);


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


   //____________________comments____________________________
    
   const [comment, setComment] = useState("+10");
   const [myAnimation, setAnimate] = useState("hideComment");

   const [combo, setCombo] = useState(0);
   
   useEffect(()=>{
       if(isEnd) return;
       if(!firstEnter){
          if(!n.bool){
           setComment("Try again!");
           animateComments();
           setCombo(0);
          }
       else if(!isMouseOver){
          setComment("+10");
          setCombo(combo+1);
          checkProgress(combo);
          animateComments();
        }
       }    
       
       console.log(combo);
   },[n]);

   useEffect(()=>{
    setFirstEnter(false);
   },[]);
    
  function checkProgress(n){    
   if(n===7){
       setUserScore(userScore+50);
       setComment("Great! +50");
       
   }
   else if(n===4){
       setUserScore(userScore+30);
       setComment("Good! +30");
   }
   };

   
  function animateComments(){
     setAnimate("");
     setTimeout((
     )=>{ setAnimate("hideComment");}, 320);
  }

  // useEffect(()=>{})
  return (
    <>
        <div className= {`comments ${myAnimation}`}>
               {comment}
        </div>
    <div className= {`infoblock ${style}`} onMouseOver = {()=>{handleMouseover(true); setCombo(0)}} onMouseOut = {()=>{handleMouseover(false)}}
    >
      <div className="infoblock0">
         <div className="description">   { currentCommands[n.name].description}</div>
         <div className={`hint`}>{isMouseOver ? currentCommands[n.name].keys[0] : "Hint" }</div>  
      </div>
        
      <div className="progressBar" style={{width: `${progressLine}%`}}>
      </div>
     
    </div>
      </>
  )
}

