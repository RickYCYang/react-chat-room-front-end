/* eslint-disable no-constant-condition */
import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  fetchGet,
  fetchPost
} from '../../ApiService';
import {
    SET_ONLINE_COUNT,
    CONNECT_WEB_SOCKET_SUCCESS,
    CONNECT_WEB_SOCKET_FAIL

} from '../actionTypes';
import webSocketClient from 'socket.io-client'


export function *connectWebSocket(action) {
    console.log('connectWebSocket', action);
    let webSocket = yield webSocketClient('http://localhost:3000');
    if(webSocket){
        yield put({
            type: CONNECT_WEB_SOCKET_SUCCESS,
            payload: webSocket
        })
    }else{
        yield put({
            type: CONNECT_WEB_SOCKET_FAIL
        })
    }
}
