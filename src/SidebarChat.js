import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectchatId, setChat } from './features/chatSlice';
import db from './firebase';
import './SidebarChat.css';

function SidebarChat({id,chatname}) {

   

    const dispatch =useDispatch();

    const [chatInfo, setchatInfo] = useState([]);
    const chatId = useSelector(selectchatId);

    useEffect(()=>{

        db.collection('chats').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>
            setchatInfo(snapshot.docs.map((doc)=> doc.data())

        ));


    },[id])

  const addChannel = ()=>{

    dispatch(
        setChat({
            chatId:id,
            chatName:chatname
        })
    )
  }

    return (
        <div onClick={addChannel} className="sidebarChat">
        <Avatar className="avatar"/>
        <div className="sidebarchat__info">
            <h3>{chatname}</h3>
            <p>{chatInfo[0]?.message}</p>
            <small>
                {new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}
            </small>
        </div>
            
        </div>
    )
}

export default SidebarChat;
