import React from "react";
import ReactDOM from 'react-dom'
import { useEffect, useState } from "react";
import { Navigate, ScrollRestoration, useNavigate } from "react-router-dom";
import Message from "./Message";
import SendMessage from "./SendMessage";
import MessageService from "../service/MessageService";
import {useRef} from "react";

const Converstion = ({ currentUser, slectedUser }) => {


    const messageService = new MessageService();

    const navigate = useNavigate();

    const [CurrentUser, setCurrentUser] = useState(currentUser);
    const [SlectedUser, setSlectedUser] = useState(slectedUser);

    const [allMessages, setAllMessages] = useState([]); // Arry that contain all the messages in the DB
    const [conversation, setConversation] = useState([]); // arry that contain only messages between the current user and slected user
const messagesEnd = useRef(null);

    //this function update the data for the conversation, this allow the message to show on the screen without refresh
    const updateMessageData = (() => {
        messageService.get()
            .then(data => {
                setConversation(data.filter(m => m.senderEmail == CurrentUser.email && m.getterEmail == SlectedUser.email || m.getterEmail == CurrentUser.email && m.senderEmail == SlectedUser.email))
            })
    })

    useEffect(() => {
        messagesEnd.current.scrollIntoView();
        setInterval(updateMessageData, 500);
        //geting the messages from the data base and create save them in allMessage var
        messageService.get()
            .then(data => {
                setAllMessages(data);
            })
    }, [])

    
    return (
      
            <>
          
        {slectedUser && currentUser? <> <div>{conversation.map((m, index) => <div className="messageItem" key={index}><Message message={m} currentUser={CurrentUser} slectedUser={SlectedUser} key={index} /></div>)}</div>

            <footer className="textBarFull" >
                <SendMessage currentUser={CurrentUser} selectedUser={SlectedUser} />
            </footer> </> : null
        }
        <div ref= {messagesEnd} itemRef={messagesEnd}/>

        </>
        
        
    );
}
export default Converstion;