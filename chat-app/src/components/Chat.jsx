import React, { useEffect } from 'react'
import { useState } from 'react';
import { addDoc,collection,onSnapshot,serverTimestamp,query,where,orderBy } from 'firebase/firestore';
import {auth,db} from "../firebaseConfig.jsx"
import "../styles/Chat.css"

const Chat = ({room}) => {

  const [newMessage,setNewMessage] =useState("");

  const messageRef=collection(db,"messages");
  const [messages,setMessages]=useState([]);

  useEffect(()=>{
    const queryMessages=query(messageRef,where("room","==",room),orderBy("createdAt"))
    const unSubscribe=onSnapshot(queryMessages,(snapshot)=>{
      let messages=[];
      snapshot.forEach((doc)=>{
        messages.push({...doc.data(),id:doc.id})
      });
      setMessages(messages);
    })

    return ()=>unSubscribe();
  });
  

  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(newMessage==="") return;
    await addDoc(messageRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user:auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  }
  return (
    <div className='chat-app'>
      <div className='header'><h1>Welcome to : {room}</h1></div>
      <div className='messages'>
        {messages.map((message)=>(
          <div className='message' key={message.id}>
            <span className='user'>{message.user} :</span>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='new-message-form'>
        <input type="text" className='new-message-input' placeholder='Type your message here...'
        onChange={(e)=>setNewMessage(e.target.value)}
        value={newMessage}/>
        <button type="submit" className='send-button'>
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat