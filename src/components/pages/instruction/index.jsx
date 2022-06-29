import { Header } from "../../header";
import { Link } from "react-router-dom";
const shortcutsList = [
    {description: "К предыдущему сообщению в открытой цепочке",
    keys:["P"],
    },
    {description: "К следующему сообщению в открытой цепочке",
    keys:["N"]},
    {description: "К главному окну",
    keys:["Shift","Esc"]},
    {description: "К последнему чату или окну создания сообщения",
    keys:["Esc"]},
    {description: "К следующему чату или окну создания сообщения",
    keys:["Ctrl", "."]},
    {description: "К предыдущему чату или окну создания сообщения",
    keys:["Ctrl",","]},
    {description: "Открыть дополнительный адрес отправителя",
    keys:["Ctrl", "Shift", "F"]},
    {description: "Отправить",
    keys:["Ctrl", "Ввод"]},
    {description: "Добавить копию",
    keys:["Ctrl","Shift","C"]},
    {description: "Добавить скрытую копию",
    keys:["Ctrl","Shift","C"]},
    // {description: "",
    // keys:["",],}
    // {description: "",
    // keys:["",],}
    // {description: "",
    // keys:["",],}
    // {description: "",
    // keys:["",],}
    
];
export const Instruction = ()=>{
  return (
    <>
    <div className='container'>
      <Header></Header>
      <div className="instruction-header">
          <h1>Remember this hotkeys</h1>
          <Link to="/play" className='text-link'>
                     <button>
                    Go
                    </button>
          </Link>
      </div>
    
        <div className="intruction-cards">
            {
                shortcutsList.slice(0,5).map((el)=>(
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

