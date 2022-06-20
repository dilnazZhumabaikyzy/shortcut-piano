import winLogo from '../../assets/images/logo-windows-13475.png';
export const Main = ()=>{
    return(
        <>
        <div className="wrapper">
            <div className='textContainer'>
            <h1>
                Shortcut Tiles 
            </h1>
            <h3>
                Learn Shortcuts with game
            </h3>                
            </div>
            <div className="apps">
            <div className='cards'>
               <img src={winLogo} alt="Windows OS"/> 
               <h4>Windows 11/10/8</h4> 
            </div>
            </div>
        </div>
        <div className="wrapper content">
         <div className='app'>
            <div className='cards'>
               <img src={winLogo} alt="Windows OS"/> 
               <h4>Windows 11/10/8</h4> 
            </div>
            <div className='info'>
                <div className='basic'>                   
                <div className='play-block'>
                     <h1>Basic</h1>
                     <button className='play-basic-win'>Play</button>
                </div>
                
                <h4>Aliquam erat volutpat. Quisque sed porta massa. Suspendisse hendrerit finibus lectus, vel interdum tortor iaculis ut. Ut malesuada massa vitae augue condimentum sagittis. Quisque id neque sit amet arcu tristique volutpat scelerisque sed felis. Nam auctor consectetur arcu ac efficitur.</h4>
                     
        
                </div>
                <div className='advanced'>
                    <div className='play-block'>
                                     <h1>Advanced</h1>
                                     <button className='play-advanced-win'>Play</button>
                    </div>   
                <h4>Donec nec lorem id nunc dapibus pellentesque sed scelerisque nisl. In scelerisque iaculis mi, vel dapibus ex. Nunc vitae nunc scelerisque, porttitor ex quis, sagittis felis. Ut porttitor nulla non dolor luctus, eu ultricies orci condimentum.</h4>
                </div>
            </div>
         </div>
        </div>
        </>        
    );
};