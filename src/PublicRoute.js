import React from "react";
import { Redirect } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const PublicRoute = ({children}) => {
    let {user}=useUserAuth();
    if(!user)
    {
       return children;
    }
    return <Redirect to="/home" />;
}
 
export default PublicRoute;