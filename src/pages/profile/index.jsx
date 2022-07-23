import { Header } from "../../components/header";
import { useState } from "react";
import Edit from "../../components/editprofile";

const menu =[{section: "Edit", inner: <Edit/>},
             {section: "Settings", inner: "smth2"}];
             
export default function Profile() {
                 
const [currentSection, setCurrentSection] = useState(menu[0]); 

return (
    <div>
        <div className='container'>
        <Header></Header>
         <div className="profile-container">
            <div className="profile-menu-bar">
                {menu.map(el=>(
                    <h3 key={el.section} className = "profile-section" onClick={()=>setCurrentSection(el)}>{el.section}</h3>
                ))}
            </div>
            <div className="profile-content">
                {currentSection.inner}
            </div>
         </div>
     </div>
    </div>
  )
}
