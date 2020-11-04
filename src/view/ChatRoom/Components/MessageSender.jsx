import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';
import {getCookie} from '../../../ApiService';

const MessageSender = () => {
    const [message, setMessage] = useState('');
    const  {webSocket} = useSelector(state => state.chatRoomReducer);
    const [enterPress, setEnterPress] = useState(false);
    const useName = getCookie('userName');
    //let pressed = useKey('enter');
    const messageHandler = (e) => {
        const {value} = e.currentTarget;
        setMessage(value);
    }

    useEffect(() => {
        if(enterPress) {
            sendMessage();
            setEnterPress(false);
        }
    });

    const sendMessage = () => {
        const timestamp = new Date().getHours() + ':' + new Date().getMinutes() + 
            ':' + new Date().getSeconds() + ':' + new Date().getUTCMilliseconds();
        console.log('sendMessage', message);
        webSocket.emit('send', {
            useName: useName,
            message: message,
            timestamp: timestamp
        });
        setMessage('');
    }

    const enterClick = (key) => {
        //console.log('key', key);
        if(key.key === 'Enter'){
            setEnterPress(true);
        }
    }

    useEffect(() => {
        if(webSocket){
            document.addEventListener('keypress', enterClick);
        }
        return () => {
            document.removeEventListener('keypress', enterClick)
        }
    }, [webSocket])

    return(
        <div id='messageSender'>
            <TextField
                label='你想說什麼'
                id="msgTextEdit" 
                
                //helperText={<HelperText>Help Me!</HelperText>}
                onTrailingIconSelect={() => setMessage("")}
                trailingIcon={<MaterialIcon role="button" icon="delete"/>}
            >
                <Input
                id="msgTextEditInput" 
                    value={message}
                    onChange={messageHandler} 
                />
            </TextField>
            <div className="wrapper-div">
                <Button 
                    id="msgSendBtn"
                    outlined={true} 
                    raised={true} 
                    icon={<MaterialIcon role="button" icon="send" />}
                    onClick={sendMessage}
                >Send
                </Button>
            </div>
            
        </div>
    );
}

export default MessageSender;