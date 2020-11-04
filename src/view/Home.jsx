import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import {getCookie, delCookie} from '../ApiService';

import ChatRoom from './ChatRoom/ChatRoom';

const Home = () => {
    const dispatch = useDispatch();
    const {status} = useSelector(state => state.loginReducer);
    const {onlineCount} = useSelector(state => state.chatRoomReducer);
    const token =  getCookie('token');
    const userName =  getCookie('userName');

    useEffect(() => {
        if(!token) dispatch(push('/login'));
    }, [token]);

    const logoutHandler = () => {
        console.log('logout');
        delCookie('token');
        delCookie('userName');
        dispatch(push('/login'));
    }

    useEffect(() => {
        //localStorage.setItem('myData', '123');
        /*
        const data = localStorage.getItem('myData')
        console.log('localStorage', data);
        */
    })
    
    return (
    <>
    {(token)?
    <>
       <TopAppBar>
            <TopAppBarRow>
                <TopAppBarSection align='start'>
                    <TopAppBarIcon navIcon tabIndex={0}>
                        <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')}/>
                    </TopAppBarIcon>
                    <TopAppBarTitle>Welcome {userName}, Online People: {onlineCount}</TopAppBarTitle>
                </TopAppBarSection>
                <TopAppBarSection align='end' role='toolbar'>
                    <TopAppBarIcon actionItem tabIndex={0}>
                        <MaterialIcon 
                            aria-label="print page" 
                            hasRipple 
                            icon='exit_to_app' 
                            onClick={logoutHandler}
                        />
                    </TopAppBarIcon>
                </TopAppBarSection>
            </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust>
            <ChatRoom />
        </TopAppBarFixedAdjust>
    </>
    :[]
    }
    </>
    )
}

export default Home;