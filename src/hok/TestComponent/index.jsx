import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import logo from '../../assets/images/email.png';
import { UserContext } from '../../routing';
import UserService from '../../services/UserService';
import {useState} from 'react'
const TestComponent = ()=>{
    const [users, setUsers] = useState([]);
    const {store} = useContext(UserContext);
    const isAuth = store.isAuth;
    console.log("test  -",store.isAuth);
async function getUsers() {
            try {
                const response = await UserService.fetchUsers();
                setUsers(response.data);
            } catch (e) {
                console.log(e);
            }
        }
    return(

        

        <div className=''>
            <h1>TESTTEST</h1>
            <button onClick={getUsers}>Получить пользователей</button>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
        </div>
    );
};
export default observer(TestComponent);