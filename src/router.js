import Home from './pages/Home'
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";

export default [
    {
        path:'/',
        component: () => <Home />,
        exact:true
    },
    {
        path:'/gallery',
        component: () => <Gallery />,
        exact:true
    },
    {
        path:'/login',
        component: () => <Login />,
        exact:true
    }
]