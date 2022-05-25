import React from "react";
import { Redirect } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const ProtectedRoute = ({children}) => {
    let {user}=useUserAuth();
    if(!user)
    {
       return <Redirect to="/" />;
    }
    return children;
}
 
export default ProtectedRoute;