
import $api from "../http";

export default class UserService{
    static  fetchUsers(){
        console.log('fetchUSers')
        return $api.get('/users');
    }
    static async edit(data){
        return $api.post('/edit', data);
    }
}