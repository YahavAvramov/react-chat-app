import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { Navigate, useNavigate, Link, useHref, redirect } from "react-router-dom";
import MessageService from '../service/MessageService';
import UsersService from "../service/UsersService";
import UserDisplay from "./UserDispaly";
import { useParams } from 'react-router-dom';
import Converstion from "./Conversation";
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';



const style = {
    chatBoard: `flex flex-col p-{10px} relative`,

}


const Chat = ({ user, onlineUsers, users }) => {


    const { id } = useParams();
    const service = new MessageService();
    const userService = new UsersService();



    const [currentUser, setCurrentUser] = useState(user);
    const [Users, setUsers] = useState(users);
    const [slectedUserId, setSlectedUserId] = useState(id);
    const [slectedUser, setSlectedUser] = useState();
    const [showOnline, setShowOnline] = useState(false);
    const [OnlineUsers, setOnlineUsers] = useState(onlineUsers);

    //from firebase
    const [messaages, setMessages] = useState([]);
    const currentConversation = messaages.filter(m => m.senderEmail == user.email && m.getterEmail == slectedUser.email || m.getterEmail == user.email && m.senderEmail == slectedUser.email);


    useEffect(() => {
        userService.getById(slectedUserId)
            .then(data => { setSlectedUser(data) })
    }, [])

    useEffect(() => {
        setInterval(updateUsers, 1000)
        userService.get()
            .then(data => { checkIfUserIsInDb(data); })
        // .then(checkIfUserIsInDb())

    }, [])

    const updateUsers = () => {
        userService.get()
            .then(data => { setUsers(data) });

        userService.userActiveGet()
            .then(data => setOnlineUsers(data))
    }



    const checkIfUserIsInDb = (users) => {

        if (users) {

            //when there is no user in the db with the login email
            if (!users.find(u => u.email == user.email)) {
                userService.post(user);
                let newUsers = [...users];
                const newUser = { email: user.email, name: user.displayName, isActive: false, photo: user.photoURL }
                newUsers.push(newUser);
                setUsers(newUser);
                window.location.reload();
            }
            //when the user is not conected (is not in the usersActive / usersOnline json db)
            if (OnlineUsers != null && OnlineUsers != undefined) {
                //adding the user to user online json data
                if (!OnlineUsers.find(u => u.email == user.email)) {
                    userService.makeUserActive(user);
                    let tmpOnlineUsers = [...OnlineUsers];
                    const newUser = { name: user.name, email: user.email, isActive: true, photo: user.photo }
                    tmpOnlineUsers.push(newUser);
                    setOnlineUsers(tmpOnlineUsers);
                    window.location.reload();
                }
            }

        }

    }


    return (
        <div className="chatPage">


            <div className="usersBar">
                <button onClick={() => setShowOnline(!showOnline)} className={showOnline ? "showOnlineBtn" : "showAllBtn"}>{showOnline ? <>Online Users</> : <>All users</>}</button>
                {
                    showOnline ?
                        OnlineUsers.map((u, index) => u.email != currentUser.email ? <UserDisplay key={index} className="usersSidebar" user={u} /> : null)
                        :
                        Users.map((u, index) => u.email != currentUser.email ? <UserDisplay key={index} className="usersSidebar" user={u} /> : null)
                }
            </div>

            <div className="chatMessages">

                <div className="slectedUserBlock">{slectedUser && slectedUserId != undefined ? <div className="slectedUser"> <p className='slectedUserName'>{slectedUser.name}</p></div> : null}</div>

                <main >
                    {slectedUser && slectedUserId != undefined ? <Converstion currentUser={user} slectedUser={slectedUser} /> : <div className="flexDiv">
                        <div>
                             <h1>Welcome</h1>
                        <p>chose user to talk to...</p>
                        </div>
                        <img src="https://o.remove.bg/downloads/926ac69e-9b3a-4419-91ec-6336abae9c1a/technology-g84c4721f4_1920-removebg-preview.png" className="imageIconChet" />
                    </div>}
                </main>
            </div>

        </div>


    );

}
export default Chat;