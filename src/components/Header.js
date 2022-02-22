import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import AppContext from "../store/AppContext";

function Header(){

    const [isLoggedIn,user] = useContext(AppContext);

    console.log(isLoggedIn);
    console.log(user);

    const history = useHistory();

    function handleLogout(){
        const auth = getAuth();
        signOut(auth).then((res) => {
            history.replace("/login")
        });
    }

    return (
        <nav className="py-5 bg-gray-900 text-white flex justify-between">
            <ul className="flex justify-between px-10">
                <li className="mr-5">
                    <NavLink to="/" exact={true} activeClassName="underline text-blue-500">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" activeClassName="underline text-blue-500">Gallery</NavLink>
                </li>
            </ul>
            <ul className="flex justify-between px-10">
                <li>
                    {
                        isLoggedIn ? <button onClick={handleLogout}>Logout</button> : <NavLink to="/login" activeClassName="underline text-blue-500 m-10">Login</NavLink>
                    }
                </li>
                {
                    !isLoggedIn &&  <li><NavLink to="/sign-up" activeClassName="underline text-blue-500">Signup</NavLink></li>
                }
            </ul>
        </nav>
    )
}

export default Header;
