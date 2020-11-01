import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';



const MessagePanel = () => {
    const {messageBox} = useSelector(state => state.chatRoomReducer);
    let messagesEnd;

    useEffect(() => {
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }) 

    return(
        <div id="messagePanel-bg">
            <div id="messagePanel">
                {
                    messageBox.map(item => (
                        <Row id="messageBox" key={"row" + item.useName + item.timestamp}>
                            <Cell columns={12} key={"col" + item.useName + item.timestamp}>
                                <div key={item}>
                                    <MaterialIcon role="button" icon="account_circle" className="account_icon"/>
                                    <span className="message">{item.useName}({item.timestamp}): {item.message}</span>
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