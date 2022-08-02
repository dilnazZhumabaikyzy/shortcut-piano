import logo from '../../assets/images/logo2.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../routing';
import { observer } from 'mobx-react-lite';

const Header = ()=>{
    const {store} = useContext(UserContext);
    const isAuth = store.isAuth;

    return(
        <div className="header">
                <img src={logo} className="logo"></img>
                <div className='flex'>                
                <Link to={'/'}>
                <h3 style={{marginRight:"1rem"}}>Main</h3>
                </Link>
                <Link to={isAuth ?'/profile':'/login'}>
                 <h3>
                 {store.isAuth ? `Profile` :`Log in`}
                 </h3>
                </Link>
                </div>
        </div>
    );
};

export default observer(Header);