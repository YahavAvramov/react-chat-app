import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';
import Login from './components/Login';
import { useParams } from 'react-router-dom'
import UsersService from './service/UsersService';


const style = {
  maincontiner: `max-w-{720px} max-auto text-center`,
  sectionContiner: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {

  const userService = new UsersService();
  const [user] = useAuthState(auth); //firebase user 
  const [userSlected, setUserSlected] = useState(); //the user that we click on in the chat page
  const [users, setUsers] = useState([]); //all the users in the db (online and ofline)
  const [onlineUsers, setOnlineUsers] = useState([]); //only the users that online right now
 

  //geting the online users
  useEffect(() => {
    userService.userActiveGet()
      .then(data => {setOnlineUsers(data) })
  }, [])


 

  return (

    <div className='mainApp'>
      {/* {user ? makeUserActive() : null} */}
  


      <div className="">
        <section className="">
          <NavBar />
          {user ? <Chat user={user} onlineUsers={onlineUsers} users={users} /> : <Login />}


        </section>
      </div>
    </div>

  );
}

export default App;
