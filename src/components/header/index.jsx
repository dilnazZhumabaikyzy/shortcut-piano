import logo from '../../assets/images/music.png';
import { Link } from 'react-router-dom';
export const Header = ()=>{
    const isAuth = false;
    return(
        <div className="header">
            <div className="logo">
            <Link to={'/'}>
            <img src={logo} alt="Windows OS" style={{cursor: 'pointer'}}/>                
            </Link>
            </div>
            <div className="menu">
                <Link to={'/'}>
                <h3> Games</h3>
                </Link>

                <Link to={isAuth ?'/profile':'/login'}>
                 <h3>
                 {isAuth ? `Profile` :`Log In`}
                 </h3>
                </Link>
            </div>
        </div>
    );
};