import React, {useContext} from "react";
import AppContext from "../../store/AppContext";
import {Redirect, Route} from "react-router-dom";

function Guest(props){
    const [isLoggedIn] = useContext(AppContext);

    if(!isLoggedIn) return (<Route {...props} />);

    return (<Redirect to="/" />)
}

export default Guest