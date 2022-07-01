import { Keyboard } from "../keyboard";
import { Infoblock } from "../infoblock";
import { useContext,createContext,useState } from "react";

export const ProgressContext = createContext();

export const PlayArea = (props) => {
  const [n, setN] = useState({indexOrder: 0, id: 0});
  const value = {n, setN};
  return (
    <ProgressContext.Provider value={value}>
    <div className="field">
      <Infoblock />
      <Keyboard />
    </div>
    </ProgressContext.Provider>
  );
}


