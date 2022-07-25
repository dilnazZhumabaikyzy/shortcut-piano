import { makeAutoObservable } from "mobx";
import AutService from "../services/AuthService";
import axios from "axios";
import { toJS } from 'mobx';
export default class Store {
    user = {};
    isAuth = false;
    check = 'no user';
    isLoading = false;
    checked = false;
    constructor() {
        makeAutoObservable(this); 
    }

    setAuth(bool){
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
        this.check = 'user'
    }
    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(email, password){
        try {
            const response = await AutService.login(email, password);
            console.log(response);
            localStorage.setItem('token',response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response;
        } catch (error) {
            console.log(error.response?.data?.message);
            return error?.response?.data;
        }
    }

    async registration(email, password){
        try {
            const response = await AutService.registration(email, password);
            localStorage.setItem('token',response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response;
        } catch (error) {
            console.log(error.response?.data?.message);
            return error?.response?.data;
        }
        
    }

    async logout(email, password){
        try {
            const response = await AutService.logout(email, password);
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (error) {
            console.log(error.response?.data?.message)
        }
    }
  
    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token',response.data.accessToken);
            this.setAuth(true);
            console.log(this.isAuth);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error.response?.data?.message)
        }
        finally {
            this.setLoading(false);
            this.check = true;
        }
    }
}