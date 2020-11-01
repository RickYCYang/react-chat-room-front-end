import React from 'react';
import {useDispatch} from 'react-redux';
import { push } from 'connected-react-router'


// in component render:
let Navigator =() => {
    const dispatch = useDispatch();
    return(
        <ul>
            <li>    
                <div onClick={() => {
                /** do something before redirection */
                    dispatch(push('/'));
                }}>home
                </div>
            </li>
            <li>
                <div onClick={() => {
                    /** do something before redirection */
                    dispatch(push('/Test'));
                }}>Test
                </div>
            </li>
        </ul>
    )
}

// connect the action:
export default Navigator;