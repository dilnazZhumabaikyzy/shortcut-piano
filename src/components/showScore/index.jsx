import { Link } from "react-router-dom";

export const ShowScore = ({setIsEnd})=>{
    return(
        <div className="scoreBox">
            <h1>The song is over</h1>
            <h2>Your score: 100 🏆</h2>
            <div className="buttons">
                <Link to = "/">
                <button onClick={()=>console.log("you clicked me!")}>Go back</button>
                </Link> 
                <Link to = "/play">                   
                <button onClick={()=> setIsEnd(false)}>Again</button>
                </Link>    
            </div>             
        </div>
    )
}