import { useState, useContext } from "react";
import bg20 from '../../assets/images/37.svg'
import { UserContext } from "../../routing";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {store} = useContext(UserContext);
  return (
    <>
    <div className="login-svg">
        <img src={bg20}/>
    </div>
    <div className="login-container">
        <h1>CREATE NEW ACCOUNT OR SIGN IN</h1>
        <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
        <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'
            />
        <button onClick={()=>store.login(email,password)}>
                Sign In
        </button>
    
        <button className="signupbtn" onClick={()=>store.registration(email,password)}>
                Sign Up
        </button>
    </div>
    </>
  )
}

export default Login