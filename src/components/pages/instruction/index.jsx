import { Header } from "../../header";
import { Link } from "react-router-dom";

export const Instruction = (props)=>{
   const currentCommands = props.currentCommands;
  return (
    <>
    <div className='container'>
      <Header></Header>
      <div className="instruction-header">
          <h1>Remember  hotkeys</h1>
          <Link to = "/play"
        //    to={{
        //     pathname:"/play",
        //     state: "something"
        //   }}
           className='text-link'>
                     <button>
                    Go
                    </button>
          </Link>
      </div>
    
        <div className="intruction-cards">
            {
                currentCommands.map((el)=>(
                    <div className="card">
                        <div className="description"> {el.description}
                        </div>
                        <div className="shortcuts-block"> {el.keys.map(el=>(
                            <><div className="keyStyle"> 
                               {el}
                               </div>
                            </>
                        ))}
                        </div>                       
                    </div>
                ))
            }
        </div>
     </div>
      {/* <Footer></Footer> */}
  </>  
  )
}

