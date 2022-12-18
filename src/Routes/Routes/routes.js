import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../../Layouts/MainLayout/MainlayOut";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import Home from "../../Pages/Homepage/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainlayOut></MainlayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;