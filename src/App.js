import React, {useEffect, useState} from "react";
import "./assets/css/tailwind.css"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Routes from './utilt/routes/index'
import Header from './components/Header'
import {getAuth, onAuthStateChanged} from "firebase/auth";
import AppContext from "./store/AppContext";
import Loading from "./components/Loading";
import Auth from './utilt/routes/Auth'
import Guest from './utilt/routes/Guest'
import NotFound from "./pages/404";

function App(){

    const [isLoggedIn,setIsLoggedIn] = useState(null);
    const [user,setUser] = useState({});

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
            }else{
                setIsLoggedIn(false);
                setUser({});
            }
        });
    },[])

    if(isLoggedIn == null) return <Loading />

    return (
        <Router>
            <AppContext.Provider value={[isLoggedIn,user]}>
                <Header />
                <Switch>
                    {
                        Routes.map((val,ind) => {
                            if(val.protected == 'auth'){
                                return (<Auth path={val.path} component={val.component} exact={val.exact} key={ind} />);
                            }

                            if(val.protected == 'guest'){
                                return (<Guest path={val.path} component={val.component} exact={val.exact} key={ind} />);
                            }

                            return (<Route path={val.path} component={val.component} exact={val.exact} key={ind} />);
                        })
                    }
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </AppContext.Provider>
        </Router>
    );
}

export default App;
