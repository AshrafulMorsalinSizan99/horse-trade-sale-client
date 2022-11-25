import { createBrowserRouter } from "react-router-dom";
import DashBoardLayOut from "../../Layout/DashBoardLayOut";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyOrder from "../../Pages/DashBoard/MyOrder/MyOrder";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Homepage/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            }
        ]
    }
])

export default router;