import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../routing';



function InfoProfile() {
    const {store} = useContext(UserContext);
    const user = toJS(store.user);
    const [verifyMessage, setVerifyMessage] = useState('Verify your email, please');
  return (
    <div>
            <h1 style={{marginTop: "0", paddingTop:"0", textOverflow:"ellipsis"}}>Hello, {user ? user.email : "Dilnaz"}</h1>
            <div className= {`verify ${user.isActivated}`}>
             {verifyMessage}
            </div>
            <button onClick={()=>store.logout()} style={{marginLeft: 0, marginTop: "1em"}}>Log out</button>

    </div>
  )
}

export default observer(InfoProfile);