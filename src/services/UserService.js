
import $api from "../http";

export default class UserService{
    fetchusers(){
        return $api.get('/users');
    }
}