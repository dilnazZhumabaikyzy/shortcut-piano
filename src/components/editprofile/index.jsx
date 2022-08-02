import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../routing';

function Edit() {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isMatch, setIsMatch] = useState('');
  const {store} = useContext(UserContext);
  const user = toJS(store.user);
  const [verifyMessage, setVerifyMessage] = useState('Verify your email, please');
  // user? ()=>{setVerifyMessage(user.isVer)}
  const handleSaveBtn = ()=>{
    if(email !== '' && email !== user.email || (currentPassword !== '' && isValid)){
      store.edit({email: user.email, newEmail: email, password: {currentPassword, newPassword, confirmPassword}});
    }
    else{
      console.log(" something is wrong");
    }  
  }  
  console.log(confirmPassword);
 
  const checkPassword = (confirmPassword)=>{    
    console.log(newPassword," ", confirmPassword);
    // console.log(newPassword !== confirmPassword);

    if(newPassword !== confirmPassword){
      setIsMatch('invalid');
      setIsValid(false);
    }
    else{
      setIsMatch('valid');
      setIsValid(true)
    }
  }

  
  return (
    <div className="editSection">
    <div className="emailEdit">
    <h4>Email</h4>
    <input type="text" placeholder={user.email} value={email}  onChange={e => setEmail(e.target.value)}/>
    </div> 
    <div className="passwordBox">
      <div>
    <h4>Current password</h4>
    <input type="text"   value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
      </div>
      <div className= {isMatch}>
      <div>
    <h4>New Password</h4>
    <input type="text"  value={newPassword} onChange={e => setNewPassword(e.target.value)}/> 
      </div>
      <div>
      <h4>Consfirm new password</h4>
      <input type="text" value={confirmPassword} onChange={e => {setConfirmPassword(e.target.value); checkPassword(e.target.value)}}/> 
      </div>
      </div>
    </div> 
    <div className='buttons' style={{justifyContent:"flex-end"}}>
    <button className='saveBtn' onClick={handleSaveBtn}>Save</button>
    </div>
    
    </div>
  )
}

export default observer(Edit);