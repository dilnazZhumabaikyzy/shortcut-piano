import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import logo from '../../assets/images/email.png';
import { UserContext } from '../../routing';
const TestComponent = ()=>{
    const {store} = useContext(UserContext);
    const isAuth = store.isAuth;
    console.log("test  -",store.isAuth);
    console.log("test  -",store.check);
    return(
        <div className='footer'>
            <h1>TESTTEST</h1>
        </div>
    );
};
export default observer(TestComponent);