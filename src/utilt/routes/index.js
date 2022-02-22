import Home from './../../pages/Home'
import Gallery from "./../../pages/Gallery";
import Login from "./../../pages/Login";

export default [
    {
        path:'/',
        component: () => <Home />,
        exact:true,
        protected:null
    },
    {
        path:'/gallery',
        component: () => <Gallery />,
        exact:true,
        protected: 'auth'
    },
    {
        path:'/login',
        component: () => <Login />,
        exact:true,
        protected: 'guest'
    }
]
