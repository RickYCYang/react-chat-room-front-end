import Cookies from 'js-cookie';
import {
    PROD_HOST_NAME,
    DEV_HOST_NAME,
    PROD_ACCESS_CONTROL_ALLOW_ORIGIN,
    DEV_ACCESS_CONTROL_ALLOW_ORIGIN
} from './config'

const hostName = "https://express-chat-room-back-end.herokuapp.com" //"http://localhost:3000"
const token =  getCookie("token");

export function getCookie(key) {    
    return Cookies.get(key);;
}

export let setCookie = (key, value) => {
    Cookies.set(key, value, { expires: 7 });
}

export let delCookie = (key) => {
    Cookies.remove(key);
}

export let fetchGet = (webApi) => {
    //console.log(hostName + "/" + webApi);
    return fetch(DEV_HOST_NAME + "/" + webApi,{
        method: 'GET',
        dataType: 'jsonp',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token,
        }
    }).then(
      (response) => {
          return response.json();
      }).then((result) => {
        return result;
      }).catch((error) => {
          console.log("fetchGet: " + webApi, error);
      }
    );   
}

export let fetchPost = (webApi, data) => {
    //console.log("web api", PROD_HOST_NAME + "/" + webApi);
    return fetch(PROD_HOST_NAME + "/" + webApi,{
        method: 'POST',
        //mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': DEV_ACCESS_CONTROL_ALLOW_ORIGIN,
            'Accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': token
        },
        dataType: 'jsonp',
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(
      (response) => {
          return response.json();
      }).then((result) => {
        return result;
      }).catch((error) => {
          console.log("fetchPost", error);
      }
    );   
}