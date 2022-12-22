import React from "react";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import LogOut from "./LogOut";

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`

}
const NavBar = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
         <div className="hadderNameTag">
            <div className="nameTag">{user ? <><h1 className="CurrentUserTag">{user.displayName}<p><LogOut user ={user}/></p></h1></> : null}</div>
        </div>

       

    )
}
export default NavBar;