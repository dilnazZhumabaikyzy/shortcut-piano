import { Keyboard } from "../keyboard";
import { Infoblock } from "../infoblock";
import { useContext,createContext,useState } from "react";

export const ProgressContext = createContext();

export const PlayArea = ({song}) => {
  // const [n, setN] = useState({indexOrder: 0, id: 0});
  const [n, setN] = useState({ name: 0 });
  const value = {n, setN};

  
  return (
    <ProgressContext.Provider value={value}>
    <div className="field">
      <Infoblock />
      <Keyboard song = {song}/>
    </div>
    </ProgressContext.Provider>
  );
}


