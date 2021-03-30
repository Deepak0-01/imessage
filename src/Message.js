import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message({id,contents:{

    timestamp,message,email,uid,displayName},
}) {
    return (
        <div className="message">

        <Avatar/>
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        
            
        </div>
    )
}

export default Message;


// <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>