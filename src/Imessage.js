import React from 'react';
import Chat from './Chat';
import './Imessage.css';
import Sidebar from './Sidebar';
import './Sidebar.css';

function imessage() {
    return (
        <div className="imessage">
        
        {/*Chat*/}

        <Sidebar/>

        <Chat/>


            
        </div>
    )
}

export default imessage;

