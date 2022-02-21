import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";


function Header(){

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const history = useHistory();



    function handleLogout(){
        const auth = getAuth();
        signOut(auth).then((res) => {
            setIsLoggedIn(false);
            history.replace("/login")
        });
    }

    return (
        <nav className="py-5 bg-gray-900 text-white flex justify-between">
            <ul className="flex justify-between px-10">
                <li className="mr-5">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
            </ul>
            <ul className="flex justify-between px-10">
                <li>
                    {
                        isLoggedIn ? <button onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Header;