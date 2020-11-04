import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';
import { getCookie } from '../../../ApiService';
import MessageBox from './MessageBox';

const MessagePanel = () => {
    const {messageBox} = useSelector(state => state.chatRoomReducer);
    const userName = getCookie('userName');
    let messagesEnd;

    useEffect(() => {
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }) 

    return(
        <div id="messagePanel-bg">
            <div id="messagePanel">
                {
                    messageBox.map(message => (
                        <Row key={"row" + message.userName + message.timestamp}>
                            <Cell columns={12}>
                                <div className={(userName === message.useName)? "messageBox_mine": "messageBox_other"}>
                                    <MaterialIcon role="button" icon="account_circle" className="account_icon"/>
                                    <span>{message.useName}({message.timestamp})</span>
                                    <div className={(userName === message.useName)? "message_mine": "message_other"}>
                                        {message.message}
                                    </div>
                                </div>
                            </Cell>
                        </Row>
                    ))
                }
                <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { messagesEnd = el; }}>
                </div>
            </div>
        </div>
    );
}

export default MessagePanel;