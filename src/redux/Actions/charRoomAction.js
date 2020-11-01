import {
    CONNECT_WEB_SOCKET,
    SET_ONLINE_COUNT
} from '../actionTypes'


export let connectWebSocket = () => {
    return {
        type: CONNECT_WEB_SOCKET,
    }
}

export let setOnlineCount = (onlineCount) => {
    return {
        type: SET_ONLINE_COUNT,
        payload: onlineCount
    }
}


