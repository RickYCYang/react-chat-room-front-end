import Cookies from 'js-cookie'

const hostName = "http://localhost:3000"
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
    return fetch(hostName + "/" + webApi,{
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
    console.log("web api", hostName + "/" + webApi);
    return fetch(hostName + "/" + webApi,{
        method: 'POST',
        //mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3001',
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