import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Chat from "./Chat";
function UserDisplay({user}) {

    const navigete = useNavigate();
    const [User, setUser] = useState(user);
 
   

    return (

        <div>
            <div className="clearfix">
                <a href={'/' + User.id}>
                    <div className="imgAndStatusTag">
                       <img src={user.photo} className='userImg' /> 
                       <div className="status">
                            <i className="fa fa-circle online"></i> {user.isActive ? <p className="online">online</p> : null}
                        </div>
                    </div>
                    
                    <div className="about">
                        <div className="name">{user.name}</div>
                       
                    </div>
                </a>
            </div>
        </div>


        // <div className="userDisplay">
        //     <a href={'/' + User.id}>
        //         <div>
        //             <p>{user.name}</p>
        //         </div>
        //     </a>
        // </div>

    )



}
export default UserDisplay;