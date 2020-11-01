import {
    SET_USER_ACCOUNT,
    SET_USER_PASSWORD,
    LOGIN_REQUEST
} from '../actionTypes';
import { push } from 'connected-react-router';
import {
    getCookie
} from '../../ApiService';


export let setAccountPassword = (e) => {
    const {id, value} = e.currentTarget;
    switch(id){
        case "account":
            return({
                type: SET_USER_ACCOUNT,
                payload: value,
            })
        case "password":
            return({
                type: SET_USER_PASSWORD,
                payload: value,
            })
    }
}

export let login = (account, password) => {
    return({
        type: LOGIN_REQUEST,
        payload: {
            account: account,
            password: password
        }   
    })
}

export let checkLogined = () => {
    const token =  getCookie('token');
    console.log('checkLogined', token !== undefined);
    if(token) return(push('/'));
    else return ({type: null});
}
