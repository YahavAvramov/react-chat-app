import React, { useState } from "react";
import { auth } from "../firebase";
import UsersService from "../service/UsersService";
import { useEffect } from "react";

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}


const LogOut = ({ user }) => {

    const userService = new UsersService();
    const [usersActive, setUsersActive] = useState([]);

    useEffect(() => {
        userService.userActiveGet()
            .then(data => { setUsersActive(data); })

    }, [])


    const signOut = () => {
        console.log(usersActive);
        const userToLogOut = usersActive.find(u => u.email == user.email);
        console.log(userToLogOut);
        if (userToLogOut) {
            userService.logOut(userToLogOut.id);
            let usersActiveTmp = [...usersActive];
            usersActiveTmp.pop(userToLogOut);
            setUsersActive(usersActiveTmp);
        }

        auth.signOut();
    }


    return <div>
        <a className="logOutBtn" onClick={signOut}><img className="imageLogOut" src="https://cdn.pixabay.com/photo/2017/05/29/23/02/logging-out-2355227_960_720.png" alt="logout"></img></a>
    </div>
}
export default LogOut;