import { useState, useContext } from "react";
import bg20 from '../../assets/images/37.svg'
import { UserContext } from "../../routing";
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useNavigate, useLocation} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage= location.state?.from?.pathname || '/';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessageDisplay, setErrorMessageDisplay] = useState('hide');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorsArray, setErrorsArray] = useState([]);
    const {store} = useContext(UserContext);
    
    const handleLogin = async(email,password)=>{
      const response = await store.login(email,password);
      console.log(response);
     
      if(response.status === 200){
        console.log(response.status);
        navigate(fromPage);
    }
    else{
        setErrorMessageDisplay("");
        setErrorMessage(response.message);
        setErrorsArray(response.errors);
        console.log(response);
        console.log(response.errors);
        }
    }
    const handleRegistration = async(email,password)=>{
        const response = await store.registration(email,password);
      console.log(response);
        if(response.status === 200){
            console.log(response.status);
            navigate(fromPage);
        }
        else{
            setErrorMessageDisplay("");
            setErrorMessage(response.message);
            setErrorsArray(response.errors);
            console.log(response);
            console.log(response.errors);
            }
      }
      
  return (
    <>
    <div className="login-svg">
        <img src={bg20}/>
    </div>
    <div className="login-container">
        <h2>CREATE NEW ACCOUNT OR SIGN IN</h2>
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
        <button className="signinbtn" onClick={()=>handleLogin(email, password)}>
                Sign In
        </button>
    
        <button className="signupbtn" onClick={()=>handleRegistration(email,password)}>
                Sign Up
        </button>

        <div className={errorMessageDisplay} style={{color: "red", marginTop: "1.5em"}}>
            {errorMessage}
            <div>
            {errorsArray.isEmpty ? "": errorsArray.map(el=>(<div key={uuidv4()}>{el.msg}</div>))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Login;