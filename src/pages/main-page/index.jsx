import winLogo from '../../assets/images/logo-windows-13475.png';
import vscodeLogo from '../../assets/images/vscode.svg';
import gmailLogo from '../../assets/images/logo-gmail.png';
import { Link } from "react-router-dom";
import { UserContext } from '../../routing';
import { useContext,useEffect } from 'react';
import logo from '../../assets/images/2.svg'
export const Main = ()=>{
    // useEffect(() => {
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    //     // 
    //   }, []);
    return(
        <>
        <div className="wrapper">
            <div className='textContainer'>
            <h1>
                Shortcut Piano 
            </h1>
            <h3>
            Keyboard shortcut game
            </h3>                
            </div>
            <div className="apps">
            <div className='cards'>
           
               <img src={gmailLogo} alt="Gmail"/> 
               <h3>Gmail</h3> 
            
            </div>
            <div className='cards'>
               <img src={vscodeLogo} alt="VScode"/> 
               <h3>Vscode</h3> 
               </div>
            </div>
        </div>
        <div className="wrapper content">
         <div className='app'>
         
               <div className='cards'>
               <img src={gmailLogo} alt="GMail"/> 
               <h3>Gmail</h3> 
               </div>

            <div className='info' >          
                <div className='basic'>                   
                <div className='play-block'>
                     <h1>Basic</h1>
                     <Link to="/compositions/basic/gmail" className='text-link'>
                     <button className='play-basic-win'>
                      Play                        
                     </button>
                     </Link>
           
            </div>                
                <h4>
                    <div style={{fontSize: "1.3rem", marginBottom: "1rem"}}>
                    74 shortcuts 
                    </div>
                    Suitable for beginners. 5 compositions for complete learning. 
                </h4> 
            </div>
                <div className='advanced'>
                    <div className='play-block'>
                                     <h1>Advanced</h1>
                                     <Link to="/compositions/advanced/gmail
                                     " className='text-link'>
                                     <button className='play-advanced-win'>Play</button>
                     </Link>
                    </div>   
                <h4>
                A mode for those who have already learned keyboard shortcuts and want to fix them in memory. Compositions from different keyboard shortcuts                    </h4>
                </div>
            </div>
         
         </div>
         <div className='app'>
               <div className='cards'>
               <img src={vscodeLogo} alt="Vscode"/> 
               <h3>Vscode</h3> 
               </div>

            <div className='info'>
                <div className='basic'>                   
                <div className='play-block'>
                     <h1>Basic</h1>
                     <Link to="/compositions/basic/gmail" className='text-link'>
                     <button className='play-basic-win'>
                      Play                        
                     </button>
                     </Link>
                </div>
                
                <h4>Aliquam erat volutpat. Quisque sed porta massa. Suspendisse hendrerit finibus lectus, vel interdum tortor iaculis ut. Ut malesuada massa vitae augue condimentum sagittis. Quisque id neque sit amet arcu tristique volutpat scelerisque sed felis. Nam auctor consectetur arcu ac efficitur.</h4>
                     
        
                </div>
                <div className='advanced'>
                    <div className='play-block'>
                                     <h1>Advanced</h1>
                                     <Link to="/compositions/advanced/gmail" className='text-link'>
                                     <button className='play-advanced-win'>Play</button>
                     </Link>
                    </div>   
                <h4>Donec nec lorem id nunc dapibus pellentesque sed scelerisque nisl. In scelerisque iaculis mi, vel dapibus ex. Nunc vitae nunc scelerisque, porttitor ex quis, sagittis felis. Ut porttitor nulla non dolor luctus, eu ultricies orci condimentum.</h4>
                </div>
            </div>
         </div>
        </div>
        </>        
    );
};