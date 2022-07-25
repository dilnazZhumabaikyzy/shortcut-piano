import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../routing';

function Edit() {
  const {store} = useContext(UserContext);
  const user = toJS(store.user);
  const [verifyMessage, setVerifyMessage] = useState('Verify your email, please');
  // user? ()=>{setVerifyMessage(user.isVer)}
  return (
    <div className="editSection">
    <h1 style={{marginTop: "0", paddingTop:"0", textOverflow:"ellipsis"}}>Hello, {user? user.email : "Dilnaz"}</h1>
    <div className='verify'>
    {verifyMessage}
    </div>
    <div className="emailEdit">
    <h4>Email</h4>
    <input type="text"/>
    </div> 
    <div className="passwordBox">
      <div>
    <h4>Current password</h4>
    <input type="text"/>
      </div>
      <div>
    <h4>New Password</h4>
    <input type="text"/> 
      </div>
      <div>
    <h4>Consfirm new password</h4>
    <input type="text"/>  

      </div>
    </div> 
    <button>Save</button>
    </div>
  )
}

export default observer(Edit);