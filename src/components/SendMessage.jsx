import React from "react"; 
import ReactDOM from 'react-dom'
import MessageService from '../service/MessageService';
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';

const SendMessage = ({currentUser, selectedUser}) => {

    const service = new MessageService();
    const [messageText, setMessageText] = useState();



    const Send = (event) => {
        if (messageText == '' || messageText == undefined || messageText == null) { return null }

        else {
            service.post(currentUser, selectedUser, messageText);
            document.getElementById('textBar').value= "";
      
            setMessageText('');
        }
    }

    const setMessage = (event) => {

        setMessageText(event.target.value);
        console.log(event.target.value);
    }

    return <>
        <input type="button" value="Send" onClick={Send} className='sendBtn' />
       <input type="text" onChange={setMessage} itemID='textBar' className="textBar" id="textBar"/>  
    </>

}
export default SendMessage;