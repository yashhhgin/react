import React, {useEffect, useState} from "react";
import "./assets/css/tailwind.css"
import { BrowserRouter as Router,Switch ,Route} from "react-router-dom";
import Routes from './router'
import Header from './components/Header'
import {getAuth, onAuthStateChanged} from "firebase/auth";

function App(){

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [user,setUser] = useState({});
    const AppContext = React.createContext({loggedIn:false,user:{}})

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
                console.log(user)
            }else{
                setIsLoggedIn(false);
                setUser({});
            }
        });
    },[])

    return (
        <Router>
            <AppContext.Provider value={[isLoggedIn,user]}>
                <Header />
                <Switch>
                    {
                        Routes.map((val,ind) => <Route path={val.path} component={val.component} exact={val.exact} key={ind} />)
                    }
                </Switch>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
