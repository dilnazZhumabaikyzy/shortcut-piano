import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProgressContext } from "../playArea";

export const ShowScore = ({setIsEnd})=>{
    const {category, app, param}  =useParams();
    const {userScore} = useContext(ProgressContext);
    return(
        <div className="scoreBox">
            <h1>The song is over</h1>
            <h2>Your score: {userScore} 🏆</h2>
            <div className="buttons">
                <Link to = {`/compositions/${category}/${app}`}>
                <button onClick={()=>console.log("you clicked me!")}>Go back</button>
                </Link> 
                <Link to = {`/play/${category}/${app}/${param}`}>                   
                <button onClick={()=> setIsEnd(false)}>Again</button>
                </Link>    
            </div>             
        </div>
    )
}