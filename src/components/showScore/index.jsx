import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProgressContext } from "../playArea";
import notesPng from "../../assets/images/notesPng.png"

export const ShowScore = ({setIsEnd})=>{
    const {category, app, param}  =useParams();
    const {userScore} = useContext(ProgressContext);
    return(
        <>
        <div className="scoreBox">
        <div className="scoreBoxDetails">
            <img src={notesPng} alt="" />
        </div>
            <h1>The song is over</h1>
            <h2>Your score: {userScore} 🏆</h2>
            <div className="buttons">
                <Link to = {`/compositions/${category}/${app}`}>
                <button >Go back</button>
                </Link> 
                  
                <button onClick={()=> {setIsEnd(false); window.location.reload(false)}}>Again</button>
                
            </div>             
        </div>
        </>
    )
}