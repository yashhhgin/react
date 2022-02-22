import React, {useContext} from "react";
import AppContext from "../../store/AppContext";
import {Redirect, Route} from "react-router-dom";

function Auth(props){
    const [isloggedIn] = useContext(AppContext);

    if(isloggedIn) return (<Route {...props} />);

    return (<Redirect to="/login" />)
}

export default Auth;
