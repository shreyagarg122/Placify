import { useHistory } from "react-router";
import { useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";

const Profile = () => {

    const history= useHistory();

    const handleClick=()=>{
        history.push('/studentshome');
    }

    const {user, logOut}=useUserAuth();

    const handleLogOut=async ()=>{
        try{
            await logOut();
        }catch(err){
            console.log(err.message);
        }
    };
    return ( 
        <div className="profile">
            
             <h1>Hi {user && user.email}</h1>
             {/* <h1>{dateNtime}</h1> */}
             {/* <h1>{dnt}</h1> */}
             {/* <h1>{today}</h1> */}
             <button onClick={handleClick}>See registered students</button>
             <br />
             <button onClick={handleLogOut}>Log Out</button>
        </div>
     );
}
 
export default Profile;