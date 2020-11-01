import React, { useEffect, useCallback, useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import {Cell, Grid, Row} from '@material/react-layout-grid';

import MessagePanel from './Components/MessagePanel';
import MessageSender from './Components/MessageSender';

import {
    connectWebSocket,
    setOnlineCount,
} from '../../redux/Actions/charRoomAction';


const ChatRoom = ({webSocket, onlineCount, connectWebSocket, setOnlineCount}) => {  
    const dispatch = useDispatch();

    useEffect(() => {
        if(webSocket){
            initWebSocket();
        }else{
            connectWebSocket();
        }
    }, [webSocket]);

    const initWebSocket = () => {
        console.log('initWebSocket');

        webSocket.on('online', onlineCount => {
            //console.log('onlineCount', onlineCount);
            setOnlineCount(onlineCount)
        });

        webSocket.on('msg', message => {
            console.log('message', message)
            dispatch({
                type: 'SET_MESSAGE_BOX',
                payload: message
            });
        });
    }

    return (
    <Grid id='mainGrid'>
        <Row>
            <Cell columns={12}>
                <MessagePanel/>
            </Cell>
        </Row>
        <Row>
            <Cell columns={12}>
                <MessageSender/>
            </Cell>
        </Row>
    </Grid>
    );
}

const mapDispatchToProps = {
    connectWebSocket,
    setOnlineCount
}

const mapStateToProps = (state) => {
    return{
        webSocket: state.chatRoomReducer.webSocket,
        onlineCount: state.chatRoomReducer.onlineCount
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);