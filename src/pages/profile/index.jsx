import  Header  from "../../components/header";
import { useState } from "react";
import Edit from "../../components/editprofile";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { UserContext } from "../../routing";


const  Profile = () =>{
    
    const {store} =useContext(UserContext);
    const menu =[{section: "Edit", inner: <Edit/>},
    {section: "Settings", inner: "smth2"}];
    
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
                <button onClick={()=>store.logout()}>Log out</button>
            </div>
         </div>
     </div>
    </div>
  )
}
export default observer(Profile);