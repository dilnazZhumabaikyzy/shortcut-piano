import { Keyboard } from "../keyboard";
import { Infoblock } from "../infoblock";
import { useContext,createContext,useState, useEffect } from "react";
import { basicGmail } from "../../modules/compositions";
export const ProgressContext = createContext();

export const PlayArea = ({songIndex}) => {
  useEffect(()=>{
    sessionStorage.setItem('currentSongScore', 0); 
  },[]);

  let mysong = basicGmail[songIndex];
  
  // const [n, setN] = useState({indexOrder: 0, id: 0});
  const [n, setN] = useState({ name: 0 });
  const [userScore, setUserScore] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [isMouseOver, setMouse] = useState(false);
  const value = {n, setN,userScore, setUserScore, isEnd, setIsEnd,isMouseOver, setMouse};

  
  return (
    <ProgressContext.Provider value={value}>
    <div className="field">
      <Infoblock mysong = {mysong}/>
      <Keyboard song = {mysong}/>
    </div>
    </ProgressContext.Provider>
  );
}


