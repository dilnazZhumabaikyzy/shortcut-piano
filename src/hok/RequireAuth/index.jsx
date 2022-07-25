import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"
import { UserContext } from "../../routing";

const RequireAuth = ({children}) => {
  const location = useLocation();
  const {store} = useContext(UserContext);

  const isAuth = store.isAuth;
  const madeCheckRequest = store.checked;
  // console.log("require auth  -",store.isAuth);
  // console.log("require auth  -",store.check);
  // console.log({madeCheckRequest});
  if(store.isLoading){
   
  }
  if(!isAuth && madeCheckRequest || !localStorage.getItem('token')){
    return <Navigate to='/login' state={{from: location}}/>
  }
  return children;
}

export default observer(RequireAuth);
