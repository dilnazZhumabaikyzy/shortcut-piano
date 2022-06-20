import logo from '../../assets/images/music.png';
export const Header = ()=>{
    return(
        <div className="header">
            <div className="logo">
            <img src={logo} alt="Windows OS"/> 
            </div>
            <div className="menu">
                <h3>Games</h3>
                <h3>Sing Up</h3>
                <h3>Log In</h3>
            </div>
        </div>
    );
};