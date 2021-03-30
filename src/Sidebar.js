import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import './Sidebar.css';
import { IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import db from './firebase';

function Sidebar() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const [chats, setChats] = useState([]);

    const signOut = ()=>{

        dispatch(logout());
    };

    const addChat= ()=>{

        const chatname = prompt("Please Enter a New Chat Name");


        db.collection("chats").add({
            chatname:chatname,
        })
    }

    useEffect(()=>{

        db.collection("chats").onSnapshot(snapshot=>{

            setChats(snapshot.docs.map((doc)=> ({

                id:doc.id,
                data:doc.data(),
            })))
        })
        


    },[])


    return (
        <div className="sidebar">

        <div className="sidebar__header">

        <Avatar src={user.photo} onClick ={signOut} className="sidebar__avatar" src="" alt="Deepak"/>
        <div className="sidebar__input">

        <SearchIcon className="sidebar__headersearch"/>
       <input className="header__input" placeholder="Enter your search here"/>


        </div>
        
       <IconButton>  
       <PeopleAltIcon  onClick={addChat} className="sidebar__headerpep"/>
       </IconButton>
     
        </div>

        <div className="sidebar__chats">


        

       { 
           chats.map(({id,data:{chatname}}) =>

          <SidebarChat key={id} id={id} chatname={chatname}/>

       

        )} 
           
           
           
        </div>
            
        </div>
    )
}

export default Sidebar
