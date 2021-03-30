import React, { useEffect, useState } from 'react';
import MicNoneTwoTone from '@material-ui/icons/MicNoneTwoTone';
import './Chat.css';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectchatName ,selectchatId } from './features/chatSlice';
import db from './firebase';
import { selectUser } from './features/userSlice';
import firebase from 'firebase';


function Chat() {

    const [input, setInput] = useState("");

    const chatname = useSelector(selectchatName);
    const chatId = useSelector(selectchatId);

    const user =useSelector(selectUser);

    const [messages, setMessages] = useState([]);


    useEffect(()=>{

        if(chatId)
        {

            db.collection("chats").doc(chatId).collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot=>(

                setMessages(snapshot.docs.map(doc=>({
        
                    id:doc.id,
                    data:doc.data(),
                })))
        
        
        
               ))
               

        }

      





    },[chatId]);

    


    const sendMessage= (e)=>{

        e.preventDefault();

       

            db.collection('chats').doc(chatId).collection('messages').add({

                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                message:input,
                uid:user.uid,
               
                email:user.email,
               
                displayName:user.displayName,
        
               });
        

        

      

        setInput("");
    }
    return (
        <div className="chat">

        {/*Chat header*/}
        <div className="chat__header">
        <div className="chat__topheader">
            <h4>To: <span className="chat__name">{chatname}</span></h4>
          
        </div>

        <div>
        <h4>Details</h4>


        </div>
       
        </div>
      
        {/*chat body*/}

        <div className="chat__body">

     {messages.map(({id,data})=>
     <Message key={id} contents={data}/>

     )}

           
         
        </div>

        {/*Chat Input*/}

        <div className="chat__input">
            <form> 
                <input value={input} onChange={e=> setInput(e.target.value)} type="text"></input>
                <button className="send__button" onClick={sendMessage}>Send Message</button>
            </form>
            <MicNoneTwoTone/>
        </div>

      
            
        </div>
    )
}

export default Chat;


// 